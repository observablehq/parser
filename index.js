// TODO Allow viewof definitions.
// TODO Allow viewof references (but don’t allow local viewof declarations).
// TODO Report locations if options.locations is true.
// TODO Report whether a Cell is async or a generator.
// TODO Disallow top-level arguments references.
// TODO Disallow simultaneous usage of yield and await.
// TODO Allow deprecated generator blocks *{ … }?
export default function(acorn) {
  const tt = acorn.tokTypes;

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
        body
      };
    }

    // An expression. Possibly a function or class declaration.
    const body = this.parseExpression();
    this.expect(tt.eof);
    return {
      type: "Cell",
      id: body.type === "FunctionExpression"
          || body.type === "ClassExpression"
          ? body.id : null,
      body
    };
  }

  acorn.plugins.observable = function(instance) {
    instance.extend("parseImport", () => parseImport);
    instance.extend("parseImportSpecifiers", () => parseImportSpecifiers);
    instance.extend("parseTopLevel", () => parseTopLevel);
  };
}
