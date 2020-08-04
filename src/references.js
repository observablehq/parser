import {recursive} from "acorn-walk";
import walk from "./walk.js";

export default function findReferences(cell, globals) {
  const ast = {type: "Program", body: [cell.body]};
  const references = [];
  let currentBlockScope = Object.create(null);
  let currentScope = currentBlockScope;
  const stack = [];

  currentBlockScope.undefined = true;

  if (globals) {
    for (const global of globals) {
      currentBlockScope[global] = true;
    }
  }

  function declarePattern(node, scope) {
    switch (node.type) {
      case "Identifier":
        scope[node.name] = true;
        break;
      case "ObjectPattern":
        for (const property of node.properties) {
          declarePattern(property, scope);
        }
        break;
      case "ArrayPattern":
        for (const element of node.elements) {
          if (element) {
            declarePattern(element, scope);
          }
        }
        break;
      case "Property":
        declarePattern(node.value, scope);
        break;
      case "RestElement":
        declarePattern(node.argument, scope);
        break;
      case "AssignmentPattern":
        declarePattern(node.left, scope);
        break;
      default:
        throw new Error("unexpected pattern: " + node.type);
    }
  }

  function visitScope(node, state, visit) {
    stack.push(currentBlockScope);
    currentScope = currentBlockScope = Object.create(currentBlockScope);
    walk[node.type](node, state, visit);
    currentScope = currentBlockScope = stack.pop();
  }

  function visitBlockScope(node, state, visit) {
    stack.push(currentBlockScope);
    currentBlockScope = Object.create(currentBlockScope);
    walk[node.type](node, state, visit);
    currentBlockScope = stack.pop();
  }

  function visitFunction(node, state, visit) {
    if (node.id) currentBlockScope[node.id.name] = true;
    stack.push(currentBlockScope);
    currentScope = currentBlockScope = Object.create(currentBlockScope);
    if (node.type !== "ArrowFunctionExpression") currentBlockScope.arguments = true;
    for (const param of node.params) declarePattern(param, currentBlockScope);
    walk.Function(node, state, visit);
    currentScope = currentBlockScope = stack.pop();
  }

  function visitClass(node, state, visit) {
    if (node.id) currentBlockScope[node.id.name] = true;
    stack.push(currentBlockScope);
    currentScope = currentBlockScope = Object.create(currentBlockScope);
    walk.Class(node, state, visit);
    currentScope = currentBlockScope = stack.pop();
  }

  function visitCatchClause(node, state, visit) {
    stack.push(currentBlockScope);
    currentScope = currentBlockScope = Object.create(currentBlockScope);
    if (node.param) declarePattern(node.param, currentBlockScope);
    walk.CatchClause(node, state, visit);
    currentScope = currentBlockScope = stack.pop();
  }

  function visitVariableDeclaration(node, state, visit) {
    const scope = node.kind === "var" ? currentScope : currentBlockScope;
    for (const {id} of node.declarations) declarePattern(id, scope);
    walk.VariableDeclaration(node, state, visit);
  }

  function visitViewExpression(node) {
    if (!currentBlockScope[`viewof ${node.id.name}`]) references.push(node);
  }

  function visitMutableExpression(node) {
    if (!currentBlockScope[`mutable ${node.id.name}`]) references.push(node);
  }

  function visitIdentifier(node) {
    if (!currentBlockScope[node.name]) {
      if (node.name === "arguments") {
        throw Object.assign(new SyntaxError("arguments is not allowed"), {node});
      }
      references.push(node);
    }
  }

  recursive(ast, null, {
    BlockStatement: visitBlockScope,
    CatchClause: visitCatchClause,
    Class: visitClass,
    ForInStatement: visitBlockScope,
    ForOfStatement: visitBlockScope,
    ForStatement: visitBlockScope,
    Function: visitFunction,
    Identifier: visitIdentifier,
    MutableExpression: visitMutableExpression,
    Program: visitScope,
    VariableDeclaration: visitVariableDeclaration,
    VariablePattern: visitIdentifier,
    ViewExpression: visitViewExpression
  }, walk);

//   function checkConst(node, parents) {
//     switch (node.type) {
//       case "Identifier":
//       case "VariablePattern": {
//         identifier(node, parents);
//         break;
//       }
//       case "ArrayPattern":
//       case "ObjectPattern": {
//         ancestor(
//           node,
//           {
//             Identifier: identifier,
//             VariablePattern: identifier
//           },
//           walk
//         );
//         break;
//       }
//     }
//     function identifier(node, nodeParents) {
//       for (const parent of parents) {
//         if (hasLocal(parent, node.name)) {
//           return;
//         }
//       }
//       if (nodeParents[nodeParents.length - 2].type === "MutableExpression") {
//         return;
//       }
//       throw Object.assign(new SyntaxError(`Assignment to constant variable ${node.name}`), {node});
//     }
//   }
//
//   function checkConstArgument(node, parents) {
//     checkConst(node.argument, parents);
//   }
//
//   function checkConstLeft(node, parents) {
//     checkConst(node.left, parents);
//   }
//
//   ancestor(
//     ast,
//     {
//       AssignmentExpression: checkConstLeft,
//       UpdateExpression: checkConstArgument,
//       ForOfStatement: checkConstLeft,
//       ForInStatement: checkConstLeft
//     },
//     walk
//   );

  return references;
}
