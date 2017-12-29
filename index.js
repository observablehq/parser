export default function(acorn) {
  const tt = acorn.tokTypes;

  function checkLVal(next) {
    return function(expr, bindingType) {
      if (expr.type !== "ViewExpression" || bindingType !== "import") {
        return next.apply(this, arguments);
      }
    };
  }

  function enterFunctionScope(next) {
    return function() {
      ++this.O_function;
      return next.apply(this, arguments);
    };
  }

  function exitFunctionScope(next) {
    return function() {
      --this.O_function;
      return next.apply(this, arguments);
    };
  }

  function isKeyword(next) {
    return function(name) {
      return name === "viewof" || next.apply(this, arguments);
    };
  }

  function parseAwait(next) {
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

  function parseYield(next) {
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

  function parseExprAtom(next) {
    return function() {
      return this.parseMaybeViewExpression() || next.apply(this, arguments);
    };
  }

  function parseMaybeViewExpression() {
    if (this.isContextual("viewof")) {
      const node = this.startNode();
      this.expectContextual("viewof");
      node.id = this.parseIdent();
      return this.finishNode(node, "ViewExpression");
    }
  }

  function parseImport(node) {
    this.next();
    node.specifiers = this.parseImportSpecifiers();
    if (this.type === tt._with) {
      this.next();
      node.injections = this.parseImportSpecifiers();
    }
    this.expectContextual("from");
    node.source = this.type === tt.string ? this.parseExprAtom() : this.unexpected();
    return this.finishNode(node, "ImportDeclaration");
  }

  function parseImportSpecifiers() {
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
      if (this.eatContextual("viewof")) {
        node.view = true;
      }
      node.imported = this.parseIdent();
      if (this.eatContextual("as")) {
        node.local = this.parseIdent();
      } else {
        this.checkUnreserved(node.imported);
        node.local = node.imported;
      }
      this.checkLVal(node.local, "import");
      nodes.push(this.finishNode(node, "ImportSpecifier"));
    }
    return nodes;
  }

  function parseTopLevel(node) {
    const lookahead = acorn.tokenizer(this.input);
    let token = lookahead.getToken();

    this.strict = true;
    this.inAsync = true;
    this.inGenerator = true;
    this.inFunction = true;

    // An empty cell?
    if (token.type === tt.eof) {
      return null;
    }

    // An import?
    if (token.type === tt._import) {
      const body = this.parseImport(node);
      this.expect(tt.eof);
      return body;
    }

    // A named cell?
    node.id = null;
    if (token.type === tt.name) {
      if (token.value === "viewof") {
        token = lookahead.getToken();
        if (token.type !== tt.name) {
          lookahead.unexpected();
        }
      }
      token = lookahead.getToken();
      if (token.type === tt.eq) {
        node.id = this.parseMaybeViewExpression() || this.parseIdent();
        token = lookahead.getToken();
        this.expect(tt.eq);
      }
    }

    // A block or expression?
    const body = token.type === tt.braceL ? this.parseBlock() : this.parseExpression();
    this.expect(tt.eof);

    // A function or class declaration?
    if (node.id === null && (body.type === "FunctionExpression" || body.type === "ClassExpression")) {
      node.id = body.id;
    }

    node.async = this.O_async;
    node.generator = this.O_generator;
    node.body = body;
    return this.finishNode(node, "Cell");
  }

  acorn.plugins.observable = function(that) {
    that.extend("checkLVal", checkLVal);
    that.extend("enterFunctionScope", enterFunctionScope);
    that.extend("exitFunctionScope", exitFunctionScope);
    that.extend("isKeyword", isKeyword);
    that.extend("parseAwait", parseAwait);
    that.extend("parseYield", parseYield);
    that.extend("parseImport", () => parseImport);
    that.extend("parseImportSpecifiers", () => parseImportSpecifiers);
    that.extend("parseExprAtom", parseExprAtom);
    that.extend("parseTopLevel", () => parseTopLevel);
    that.parseMaybeViewExpression = parseMaybeViewExpression;
    that.O_function = 0;
    that.O_async = false;
    that.O_generator = false;
  };
}
