// A more accurate version of acorn-dynamic-import.
// Copyright Jordan Gensler. Released under MIT license:
// https://github.com/kesne/acorn-dynamic-import
// https://github.com/standard-things/esm/blob/0.18.0/src/acorn-ext/dynamic-import.js

import {tokTypes as tt} from "acorn";

// NOTE: This allows `yield import()` to parse correctly.
tt._import.startsExpr = true;

function parseImportCall(parser) {
  const node = parser.startNode();
  const {start} = parser;
  const callExpr = parser.startNode();
  const callee = parser.parseExprAtom();
  parser.expect(tt.parenL);
  callExpr.arguments = [parser.parseMaybeAssign()];
  callExpr.callee = callee;
  parser.finishNode(callExpr, "CallExpression");
  parser.expect(tt.parenR);
  const expr = parser.parseSubscripts(callExpr, start);
  return parser.parseExpressionStatement(node, expr);
}

function parseImportCallAtom(parser) {
  const node = parser.startNode();
  parser.expect(tt._import);
  return parser.finishNode(node, "Import");
}

export default function(Parser) {
  const parser = new Parser();

  function lookahead({input, pos}) {
    parser.input = input;
    parser.pos = pos;
    parser.nextToken();
    return parser;
  }

  return class extends Parser {
    parseExprAtom(...args) {
      if (this.type === tt._import) {
        const {type} = lookahead(this);
        if (type === tt.parenL) return parseImportCallAtom(this);
        this.unexpected();
      }
      return super.parseExprAtom(...args);
    }
    parseStatement(...args) {
      if (this.type === tt._import) {
        const {type} = lookahead(this);
        if (type === tt.parenL) return parseImportCall(this);
      }
      return super.parseStatement(...args);
    }
  };
}
