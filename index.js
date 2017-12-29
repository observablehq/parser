// TODO Allow viewof definitions.
// TODO Allow viewof references (but don’t allow local viewof declarations).
// TODO Report locations if options.locations is true.
// TODO Report whether a Cell is async or a generator.
// TODO Disallow top-level arguments references.
// TODO Disallow simultaneous usage of yield and await.
// TODO Allow deprecated generator blocks *{ … }?
// TODO Allow import with clause.
// TODO Disallow default imports.
export default function(acorn) {
  const tt = acorn.tokTypes;
  acorn.plugins.observable = function(instance) {
    instance.extend("parseTopLevel", function() {
      return function() {
        const lookahead = acorn.tokenizer(this.input);
        let token0 = lookahead.getToken();
        this.strict = true;
        this.inAsync = true;
        this.inGenerator = true;
        this.inFunction = true;

        // An empty cell?
        if (token0.type === tt.eof) {
          return {
            type: "Cell",
            id: null,
            body: null
          };
        }

        // An import?
        if (token0.type === tt._import) {
          return this.parseImport(this.startNode());
        }

        // A named cell?
        if (token0.type === tt.name) {
          let token1 = lookahead.getToken();
          if (token1.type === tt.eq) {
            let id = this.parseIdent();
            let token2 = lookahead.getToken();
            this.expect(tt.eq);
            if (token2.type === tt.braceL) {
              return {
                type: "Cell",
                id,
                body: this.parseBlock()
              };
            }
            return {
              type: "Cell",
              id,
              body: this.parseExpression()
            };
          }
        }

        // An anonymous cell. A block?
        if (token0.type === tt.braceL) {
          return {
            type: "Cell",
            id: null,
            body: this.parseBlock()
          };
        }

        // An expression. Possibly a function or class declaration.
        const body = this.parseExpression();
        return {
          type: "Cell",
          id: body.type === "FunctionExpression"
              || body.type === "ClassExpression"
              ? body.id : null,
          body
        };
      };
    });
  };
}
