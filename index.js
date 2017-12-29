// TODO Report locations if options.locations is true.
export default function(acorn) {
  const tt = acorn.tokTypes;
  const pp = acorn.Parser.prototype;

  pp.O_function = 0;
  pp.O_async = false;
  pp.O_generator = false;

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
    return function(word) {
      return word === "viewof" || next.apply(this, arguments);
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

  function parseIdent(next) {
    return function() {
      if (this.eatContextual("viewof")) {
        return {
          type: "ViewIdentifier",
          start: this.lastTokStart,
          end: this.lastTokEnd,
          id: next.apply(this, arguments)
        };
      }
      return next.apply(this, arguments);
    };
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
      node.imported = this.parseIdent();
      if (this.eatContextual("as")) {
        node.local = this.parseIdent();
      } else {
        this.checkUnreserved(node.imported);
        node.local = node.imported;
      }
      this.checkLVal(node.local, "let");
      nodes.push(this.finishNode(node, "ImportSpecifier"));
    }
    return nodes;
  }

  function parseTopLevel() {
    const lookahead = acorn.tokenizer(this.input);
    let token = lookahead.getToken();
    this.strict = true;
    this.inAsync = true;
    this.inGenerator = true;
    this.inFunction = true;

    // An empty cell?
    if (token.type === tt.eof) {
      return {
        type: "Cell",
        id: null,
        async: false,
        generator: false,
        body: null
      };
    }

    // An import?
    if (token.type === tt._import) {
      const body = this.parseImport(this.startNode());
      this.expect(tt.eof);
      return body;
    }

    // A named cell?
    if (token.type === tt.name) {
      if (token.value === "viewof") {
        token = lookahead.getToken();
        if (token.type !== tt.name) {
          lookahead.unexpected();
        }
      }
      token = lookahead.getToken();
      if (token.type === tt.eq) {
        let id = this.parseIdent();
        token = lookahead.getToken();
        this.expect(tt.eq);
        const body = token.type === tt.braceL ? this.parseBlock() : this.parseExpression();
        this.expect(tt.eof);
        return {
          type: "Cell",
          id,
          async: this.O_async,
          generator: this.O_generator,
          body
        };
      }
    }

    // An anonymous cell. A block?
    if (token.type === tt.braceL) {
      const body = this.parseBlock();
      this.expect(tt.eof);
      return {
        type: "Cell",
        id: null,
        async: this.O_async,
        generator: this.O_generator,
        body
      };
    }

    // An expression. Possibly a function or class declaration.
    const body = this.parseExpression();
    this.expect(tt.eof);
    return {
      type: "Cell",
      id: body.type === "FunctionExpression" || body.type === "ClassExpression" ? body.id : null,
      async: this.O_async,
      generator: this.O_generator,
      body
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

  acorn.plugins.observable = function(instance) {
    instance.extend("enterFunctionScope", enterFunctionScope);
    instance.extend("exitFunctionScope", exitFunctionScope);
    instance.extend("isKeyword", isKeyword);
    instance.extend("parseAwait", parseAwait);
    instance.extend("parseIdent", parseIdent);
    instance.extend("parseImport", () => parseImport);
    instance.extend("parseImportSpecifiers", () => parseImportSpecifiers);
    instance.extend("parseTopLevel", () => parseTopLevel);
    instance.extend("parseYield", parseYield);
  };
}
