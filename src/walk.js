import {make} from "acorn-walk";

export default make({
  Import() {},
  SpreadProperty(node, st, c) {
    c(node.argument, st, "Expression");
  },
  ObjectPattern(node, st, c) {
    const list = node.properties;
    for (const prop of list) {
      c(prop.value || prop.argument, st, "Pattern");
    }
  },
  ViewExpression(node, st, c) {
    c(node.id, st, "Identifier");
  },
  MutableExpression(node, st, c) {
    c(node.id, st, "Identifier");
  }
});
