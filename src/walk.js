import {make} from "acorn-walk";

export default make({
  ViewExpression(node, st, c) {
    c(node.id, st, "Identifier");
  },
  MutableExpression(node, st, c) {
    c(node.id, st, "Identifier");
  }
});
