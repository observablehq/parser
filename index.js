import {
  tokTypes as tt,
  tokenizer,
  parse,
  plugins
} from "acorn";

const options = {
  ecmaVersion: 9,
  plugins: {
    observable: true
  }
};

export function parseCell(input) {
  return parse(input, options);
}

function extendEnterFunctionScope(next) {
  return function() {
    ++this.O_function;
    return next.apply(this, arguments);
  };
}

function extendExitFunctionScope(next) {
  return function() {
    --this.O_function;
    return next.apply(this, arguments);
  };
}

function extendIsKeyword(next) {
  return function(name) {
    return name === "viewof" || name === "mutable" || next.apply(this, arguments);
  };
}

function extendParseForIn(next) {
  return function(node) {
    if (this.O_function === 1 && node.await) this.O_async = true;
    return next.apply(this, arguments);
  };
}

function extendParseAwait(next) {
  return function() {
    if (this.O_function === 1) this.O_async = true;
    return next.apply(this, arguments);
  };
}

function extendParseYield(next) {
  return function() {
    if (this.O_function === 1) this.O_generator = true;
    return next.apply(this, arguments);
  };
}

function extendParseExprAtom(next) {
  return function() {
    return this.parseMaybeKeywordExpression("viewof", "ViewExpression")
        || this.parseMaybeKeywordExpression("mutable", "MutableExpression")
        || next.apply(this, arguments);
  };
}

function extendToAssignable(next) {
  return function(node) {
    return node.type === "MutableExpression" ? node : next.apply(this, arguments);
  };
}

function extendCheckLVal(next) {
  return function(expr, bindingType, checkClashes) {
    return expr.type === "MutableExpression"
        ? next.call(this, expr.id, bindingType, checkClashes)
        : next.apply(this, arguments);
  };
}

function parseMaybeKeywordExpression(keyword, type) {
  if (this.isContextual(keyword)) {
    const node = this.startNode();
    this.next();
    node.id = this.parseIdent();
    return this.finishNode(node, type);
  }
}

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
    node.view = this.eatContextual("viewof");
    if (!node.view) node.mutable = this.eatContextual("mutable");
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

function parseTopLevel(node) {
  const lookahead = tokenizer(this.input, {plugins});
  let token = lookahead.getToken();
  let body = null;
  let id = null;

  this.strict = true;
  this.inAsync = true;
  this.inGenerator = true;
  this.inFunction = true;

  // An import?
  if (token.type === tt._import) {
    body = this.parseImport(this.startNode());
  }

  // A non-empty cell?
  else if (token.type !== tt.eof) {

    // A named cell?
    if (token.type === tt.name) {
      if (token.value === "viewof" || token.value === "mutable") {
        token = lookahead.getToken();
        if (token.type !== tt.name) {
          lookahead.unexpected();
        }
      }
      token = lookahead.getToken();
      if (token.type === tt.eq) {
        id = this.parseMaybeKeywordExpression("viewof", "ViewExpression")
            || this.parseMaybeKeywordExpression("mutable", "MutableExpression")
            || this.parseIdent();
        token = lookahead.getToken();
        this.expect(tt.eq);
      }
    }

    // A block?
    if (token.type === tt.braceL) {
      body = this.parseBlock();
    }

    // An expression?
    // Possibly a function or class declaration?
    else {
      body = this.parseExpression();
      if (id === null && (body.type === "FunctionExpression" || body.type === "ClassExpression")) {
        id = body.id;
      }
    }
  }

  this.expect(tt.eof);
  node.id = id;
  node.async = this.O_async;
  node.generator = this.O_generator;
  node.body = body;
  return this.finishNode(node, "Cell");
}

function unexpected(pos) {
  this.raise(pos != null ? pos : this.start, this.type === tt.eof ? "Unexpected end of input" : "Unexpected token");
}

plugins.observable = function(that) {
  that.extend("enterFunctionScope", extendEnterFunctionScope);
  that.extend("exitFunctionScope", extendExitFunctionScope);
  that.extend("isKeyword", extendIsKeyword);
  that.extend("parseForIn", extendParseForIn);
  that.extend("parseAwait", extendParseAwait);
  that.extend("parseYield", extendParseYield);
  that.extend("parseImport", () => parseImport);
  that.extend("parseImportSpecifiers", () => parseImportSpecifiers);
  that.extend("parseExprAtom", extendParseExprAtom);
  that.extend("parseTopLevel", () => parseTopLevel);
  that.extend("toAssignable", extendToAssignable);
  that.extend("checkLVal", extendCheckLVal);
  that.extend("unexpected", () => unexpected);
  that.parseMaybeKeywordExpression = parseMaybeKeywordExpression;
  that.O_function = 0;
  that.O_async = false;
  that.O_generator = false;
};
