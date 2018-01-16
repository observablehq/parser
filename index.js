export default function(acorn) {
  const tt = acorn.tokTypes;
  const kw = acorn.keywordTypes;

  tt._include = kw.include = new acorn.TokenType("include");
  tt._viewof = kw.viewof = new acorn.TokenType("viewof");

  function extendKeywords(keywords) {
    return {
      test: function(word) {
        return keywords.test(word) || /^(include|viewof)$/.test(word);
      }
    };
  }

  function extendEnterFunctionScope(next) {
    return function() {
      ++this.O_function;
      return next.apply(this, arguments);
    };
  }

  function extendExitFunctionScope(next) {
    return function() {
      --this.O_function;
      return next.apply(this, arguments);
    };
  }

  function extendParseAwait(next) {
    return function() {
      if (this.O_function === 1) {
        if (this.O_generator) {
          this.raise(this.start, "async generators not allowed");
        }
        this.O_async = true;
      }
      return next.apply(this, arguments);
    };
  }

  function extendParseYield(next) {
    return function() {
      if (this.O_function === 1) {
        if (this.O_async) {
          this.raise(this.start, "async generators not allowed");
        }
        this.O_generator = true;
      }
      return next.apply(this, arguments);
    };
  }

  function extendParseExprAtom(next) {
    return function() {
      return this.parseMaybeViewExpression() || next.apply(this, arguments);
    };
  }

  function parseMaybeViewExpression() {
    if (this.type === tt._viewof) {
      const node = this.startNode();
      this.next();
      node.id = this.parseIdent();
      return this.finishNode(node, "ViewExpression");
    }
  }

  // A normal import, except disallowing a trailing semicolon.
  function parseImport(node) {
    this.next();
    if (this.type === tt.string) {
      node.specifiers = [];
      node.source = this.parseExprAtom();
    } else {
      node.specifiers = this.parseImportSpecifiers();
      this.expectContextual("from");
      node.source = this.type === tt.string ? this.parseExprAtom() : this.unexpected();
    }
    return this.finishNode(node, "ImportDeclaration");
  }

  function parseInclude(node) {
    this.next();
    node.specifiers = this.parseIncludeSpecifiers();
    if (this.type === tt._with) {
      this.next();
      node.injections = this.parseIncludeSpecifiers();
    }
    this.expectContextual("from");
    node.source = this.type === tt.string ? this.parseExprAtom() : this.unexpected();
    return this.finishNode(node, "IncludeDeclaration");
  }

  function parseIncludeSpecifiers() {
    const nodes = [];
    let first = true;
    this.expect(tt.braceL);
    while (!this.eat(tt.braceR)) {
      if (first) {
        first = false;
      } else {
        this.expect(tt.comma);
        if (this.afterTrailingComma(tt.braceR)) break;
      }
      const node = this.startNode();
      node.view = this.type === tt._viewof ? (this.next(), true) : false;
      node.included = this.parseIdent();
      if (this.eatContextual("as")) {
        node.local = this.parseIdent();
      } else {
        this.checkUnreserved(node.included);
        node.local = node.included;
      }
      this.checkLVal(node.local, "let");
      nodes.push(this.finishNode(node, "IncludeSpecifier"));
    }
    return nodes;
  }

  function parseTopLevel(node) {
    const lookahead = acorn.tokenizer(this.input, this.options);
    let token = lookahead.getToken();
    let body = null;
    let id = null;

    this.strict = true;
    this.inAsync = true;
    this.inGenerator = true;
    this.inFunction = true;

    // An import?
    if (token.type === tt._import) {
      body = this.parseImport(this.startNode());
    }

    // An include?
    else if (token.type === tt._include) {
      body = this.parseInclude(this.startNode());
    }

    // A non-empty cell?
    else if (token.type !== tt.eof) {

      // A viewof cell?
      if (token.type === tt._viewof) {
        token = lookahead.getToken();
        if (token.type !== tt.name) {
          lookahead.unexpected();
        }
      }

      // A named (or viewof) cell?
      if (token.type === tt.name) {
        token = lookahead.getToken();
        if (token.type === tt.eq) {
          id = this.parseMaybeViewExpression() || this.parseIdent();
          token = lookahead.getToken();
          this.expect(tt.eq);
        }
      }

      // A block?
      if (token.type === tt.braceL) {
        body = this.parseBlock();
      }

      // An expression?
      // Possibly a function or class declaration?
      else {
        body = this.parseExpression();
        if (id === null && (body.type === "FunctionExpression" || body.type === "ClassExpression")) {
          id = body.id;
        }
      }
    }

    this.expect(tt.eof);
    node.id = id;
    node.async = this.O_async;
    node.generator = this.O_generator;
    node.body = body;
    return this.finishNode(node, "Cell");
  }

  function unexpected(pos) {
    this.raise(pos != null ? pos : this.start, this.type === tt.eof ? "Unexpected end of input" : "Unexpected token");
  }

  acorn.plugins.observable = function(that) {
    that.keywords = extendKeywords(that.keywords);
    that.parseInclude = parseInclude;
    that.parseIncludeSpecifiers = parseIncludeSpecifiers;
    that.extend("enterFunctionScope", extendEnterFunctionScope);
    that.extend("exitFunctionScope", extendExitFunctionScope);
    that.extend("parseAwait", extendParseAwait);
    that.extend("parseYield", extendParseYield);
    that.extend("parseExprAtom", extendParseExprAtom);
    that.extend("parseTopLevel", () => parseTopLevel);
    that.extend("parseImport", () => parseImport);
    that.extend("unexpected", () => unexpected);
    that.parseMaybeViewExpression = parseMaybeViewExpression;
    that.O_function = 0;
    that.O_async = false;
    that.O_generator = false;
  };
}
