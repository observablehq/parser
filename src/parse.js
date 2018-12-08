import {getLineInfo, tokTypes as tt, Parser} from "acorn";
import bigInt from "acorn-bigint";
import dynamicImport from "./dynamic-import.js";
import findReferences from "./references.js";

const SCOPE_FUNCTION = 2;
const SCOPE_ASYNC = 4;
const SCOPE_GENERATOR = 8;

export function parseCell(input, {globals} = {}) {
  const cell = CellParser.parse(input);

  // Find references.
  // Check for illegal references to arguments.
  // Check for illegal assignments to global references.
  if (cell.body && cell.body.type !== "ImportDeclaration") {
    try {
      cell.references = findReferences(cell, globals);
    } catch (error) {
      if (error.node) {
        const loc = getLineInfo(input, error.node.start);
        error.message += ` (${loc.line}:${loc.column})`;
        error.pos = error.node.start;
        error.loc = loc;
        delete error.node;
      }
      throw error;
    }
  }

  return cell;
}

export class CellParser extends Parser.extend(bigInt, dynamicImport) {
  constructor(...options) {
    super(...options);
  }
  enterScope(flags) {
    if (flags & SCOPE_FUNCTION) ++this.O_function;
    return super.enterScope.apply(this, arguments);
  }
  exitScope() {
    if (this.currentScope().flags & SCOPE_FUNCTION) --this.O_function;
    return super.exitScope.apply(this, arguments);
  }
  parseForIn(node) {
    if (this.O_function === 1 && node.await) this.O_async = true;
    return super.parseForIn.apply(this, arguments);
  }
  parseAwait() {
    if (this.O_function === 1) this.O_async = true;
    return super.parseAwait.apply(this, arguments);
  }
  parseYield() {
    if (this.O_function === 1) this.O_generator = true;
    return super.parseYield.apply(this, arguments);
  }
  parseImport(node) {
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
  parseImportSpecifiers() {
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
  parseExprAtom() {
    return this.parseMaybeKeywordExpression("viewof", "ViewExpression")
        || this.parseMaybeKeywordExpression("mutable", "MutableExpression")
        || super.parseExprAtom.apply(this, arguments);
  }
  parseCell(node, eof) {
    const lookahead = new CellParser({}, this.input, this.start);
    let token = lookahead.getToken();
    let body = null;
    let id = null;

    this.O_function = 0;
    this.O_async = false;
    this.O_generator = false;
    this.strict = true;
    this.enterScope(SCOPE_FUNCTION | SCOPE_ASYNC | SCOPE_GENERATOR);

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

    if (eof) this.expect(tt.eof); // TODO

    node.id = id;
    node.async = this.O_async;
    node.generator = this.O_generator;
    node.body = body;
    this.exitScope();
    return this.finishNode(node, "Cell");
  }
  parseTopLevel(node) {
    return this.parseCell(node, true);
  }
  toAssignable(node) {
    return node.type === "MutableExpression" ? node : super.toAssignable.apply(this, arguments);
  }
  checkUnreserved(node) {
    if (node.name ==="viewof" || node.name === "mutable") {
      this.raise(node.start, `Unexpected keyword '${node.name}'`);
    }
    return super.checkUnreserved(node);
  }
  checkLVal(expr, bindingType, checkClashes) {
    return expr.type === "MutableExpression"
        ? super.checkLVal.call(this, expr.id, bindingType, checkClashes)
        : super.checkLVal.apply(this, arguments);
  }
  unexpected(pos) {
    this.raise(pos != null ? pos : this.start, this.type === tt.eof ? "Unexpected end of input" : "Unexpected token");
  }
  parseMaybeKeywordExpression(keyword, type) {
    if (this.isContextual(keyword)) {
      const node = this.startNode();
      this.next();
      node.id = this.parseIdent();
      return this.finishNode(node, type);
    }
  }
}
