import {ancestor} from "acorn-walk";
import walk from "./walk.js";

function definesLocal(name, parents) {
  for (const {locals} of parents) {
    if (locals && locals.has(name)) {
      return true;
    }
  }
  return false;
}

function checkConst(node, parents) {
  switch (node.type) {
    case "Identifier":
    case "VariablePattern": {
      identifier(node);
      break;
    }
    case "ArrayPattern":
    case "ObjectPattern": {
      ancestor(
        node,
        {
          Identifier: identifier,
          VariablePattern: identifier
        },
        walk
      );
      break;
    }
  }
  function identifier(node) {
    const {name} = node;
    if (!definesLocal(name, parents)) {
      throw node;
    }
  }
}

function checkConstArgument(node, parents) {
  checkConst(node.argument, parents);
}

function checkConstLeft(node, parents) {
  checkConst(node.left, parents);
}

export default function(cell) {
  const ast = {type: "Program", body: [cell.body]};
  ancestor(
    ast,
    {
      AssignmentExpression: checkConstLeft,
      UpdateExpression: checkConstArgument,
      ForOfStatement: checkConstLeft,
      ForInStatement: checkConstLeft
    },
    walk
  );
}
