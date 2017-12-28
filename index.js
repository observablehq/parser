// TODO Allow viewof definitions.
// TODO Allow viewof references.
// TODO Report locations if options.locations is true.
// TODO Disallow arguments references.
// TODO Disallow yield and await.
// TODO Allow deprecated generator blocks *{ … }?
// TODO Parse custom import statements.
export default function(acorn) {
  const tt = acorn.tokTypes;
  const options = {ecmaVersion: 8, plugins: {observable: true}};
  acorn.plugins.observable = function(instance) {
    instance.extend("parseTopLevel", function(next) {
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
            type: "EmptyCell"
          };
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
                type: "BlockCell",
                id,
                body: this.parseBlock()
              };
            }
            return {
              type: "ExpressionCell",
              id,
              body: this.parseExpression()
            };
          }
        }

        // An anonymous cell. A block?
        if (token0.type === tt.braceL) {
          return {
            type: "BlockCell",
            body: this.parseBlock()
          };
        }

        return {
          type: "ExpressionCell",
          body: this.parseExpression()
        };
      };
    });
  };
}
