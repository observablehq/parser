import {make} from "acorn-walk";

export default make({
  Cell(node, st, c) {
    if (node.id) c(node.id, st);
    c(node.body, st);
  },
  CellTag(node, st, c) {
    c(node.body, st);
  },
  ViewExpression(node, st, c) {
    c(node.id, st, "Identifier");
  },
  MutableExpression(node, st, c) {
    c(node.id, st, "Identifier");
  }
});
