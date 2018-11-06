// Base on https://github.com/ForbesLindesay/acorn-globals
// Copyright (c) 2014 Forbes Lindesay
// https://github.com/ForbesLindesay/acorn-globals/blob/master/LICENSE

import {ancestor} from "acorn-walk";
import walk from "./walk.js";

function isScope(node) {
  return (
    node.type === "FunctionExpression" ||
    node.type === "FunctionDeclaration" ||
    node.type === "ArrowFunctionExpression" ||
    node.type === "Program"
  );
}

function isBlockScope(node) {
  return (
    node.type === "BlockStatement" ||
    node.type === "ForInStatement" ||
    node.type === "ForOfStatement" ||
    node.type === "ForStatement" ||
    isScope(node)
  );
}

function declaresArguments(node) {
  return (
    node.type === "FunctionExpression" || node.type === "FunctionDeclaration"
  );
}

export default function findReferences(cell, globals) {
  const ast = {type: "Program", body: [cell.body]};
  const referenceSet = new Set(globals);
  const references = [];

  function declareClass(node) {
    const cl = node;
    cl.locals = cl.locals || new Set();
    if (node.id) {
      cl.locals.add(node.id.name);
    }
  }

  function declareFunction(node) {
    const fn = node;
    fn.locals = fn.locals || new Set();
    node.params.forEach(function(node) {
      declarePattern(node, fn);
    });
    if (node.id) {
      fn.locals.add(node.id.name);
    }
  }

  function declareCatchClause(node) {
    node.locals = node.locals || new Set();
    if (node.param) {
      declarePattern(node.param, node);
    }
  }

  function declarePattern(node, parent) {
    switch (node.type) {
      case "Identifier":
        parent.locals.add(node.name);
        break;
      case "ObjectPattern":
        node.properties.forEach(function(node) {
          declarePattern(node, parent);
        });
        break;
      case "ArrayPattern":
        node.elements.forEach(function(node) {
          if (node) declarePattern(node, parent);
        });
        break;
      case "Property":
        declarePattern(node.value, parent);
        break;
      case "RestElement":
        declarePattern(node.argument, parent);
        break;
      case "AssignmentPattern":
        declarePattern(node.left, parent);
        break;
      default:
        throw new Error("Unrecognized pattern type: " + node.type);
    }
  }

  function declareModuleSpecifier(node) {
    ast.locals = ast.locals || new Set();
    ast.locals.add(node.local.name);
  }

  ancestor(
    ast,
    {
      VariableDeclaration: function(node, parents) {
        let parent = null;
        for (let i = parents.length - 1; i >= 0 && parent === null; i--) {
          if (
            node.kind === "var" ? isScope(parents[i]) : isBlockScope(parents[i])
          ) {
            parent = parents[i];
          }
        }
        parent.locals = parent.locals || new Set();
        node.declarations.forEach(function(declaration) {
          declarePattern(declaration.id, parent);
        });
      },
      FunctionDeclaration: function(node, parents) {
        let parent = null;
        for (let i = parents.length - 2; i >= 0 && parent === null; i--) {
          if (isScope(parents[i])) {
            parent = parents[i];
          }
        }
        parent.locals = parent.locals || new Set();
        parent.locals.add(node.id.name);
        declareFunction(node);
      },
      Function: declareFunction,
      ClassDeclaration: function(node, parents) {
        let parent = null;
        for (let i = parents.length - 2; i >= 0 && parent === null; i--) {
          if (isScope(parents[i])) {
            parent = parents[i];
          }
        }
        parent.locals = parent.locals || new Set();
        parent.locals.add(node.id.name);
      },
      Class: declareClass,
      CatchClause: declareCatchClause,
      ImportDefaultSpecifier: declareModuleSpecifier,
      ImportSpecifier: declareModuleSpecifier,
      ImportNamespaceSpecifier: declareModuleSpecifier
    },
    walk
  );

  function identifier(node, parents) {
    let name = node.name;
    if (name === "undefined") return;
    for (let i = parents.length - 2; i >= 0; --i) {
      if (name === "arguments" && declaresArguments(parents[i])) {
        return;
      }
      if (parents[i].locals && parents[i].locals.has(name)) {
        if (node.type === "ViewExpression" || node.type === "MutableExpression") {
          throw node;
        }
        return;
      }
      if (parents[i].type === "ViewExpression") {
        node = parents[i];
        name = `viewof ${node.id.name}`;
      }
      if (parents[i].type === "MutableExpression") {
        node = parents[i];
        name = `mutable ${node.id.name}`;
      }
    }
    if (!referenceSet.has(name)) {
      referenceSet.add(name);
      references.push(node);
    }
  }

  ancestor(
    ast,
    {
      VariablePattern: identifier,
      Identifier: identifier
    },
    walk
  );

  return references;
}
