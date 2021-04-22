import {Parser, tokTypes as tt} from "acorn";

const SCOPE_FUNCTION = 2;
const SCOPE_ASYNC = 4;
const SCOPE_GENERATOR = 8;

export default function parseTemplate(input) {
  const parser = new Parser({ecmaVersion: 12}, input, 0);
  parser.strict = true;
  const node = parser.startNode();
  node.input = input;
  node.expressions = [];
  node.quasis = [];
  while (parser.pos <= input.length) {
    const quasi = parseTemplateElement.call(parser);
    node.quasis.push(quasi);
    if (quasi.tail) break;
    node.expressions.push(parseTemplateExpression.call(parser));
  }
  return parser.finishNode(node, "TemplateLiteral");
}

function parseTemplateExpression() {
  moveTo.call(this, this.end + 2); // skip "${"
  this.enterScope(SCOPE_FUNCTION | SCOPE_ASYNC | SCOPE_GENERATOR); // 👈
  this.nextToken();
  const expression = this.parseExpression();
  if (this.input.charCodeAt(this.pos - 1) !== 125) { // "}"
    this.raise(this.pos, "Unterminated expression");
  }
  moveTo.call(this, this.pos); // skip "}"
  this.exitScope();
  return expression;
}

function moveTo(pos) {
  // This isn’t really idiomatic Acorn but not sure how else to do it…
  Object.assign(this, new this.constructor(undefined, this.input, pos));
}

function parseTemplateElement() {
  let quasi = this.startNode();
  readTemplateToken.call(this);
  // Trying to emulate how Acorn reads a token…
  this.lastTokEnd = this.end;
  this.lastTokStart = this.start;
  this.lastTokEndLoc = this.endLoc;
  this.lastTokStartLoc = this.startLoc;
  this.finishToken(tt.string, this.value);
  quasi.value = {
    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
    cooked: this.value
  };
  quasi.tail = this.end >= this.input.length;
  return this.finishNode(quasi, "TemplateElement");
}

function readTemplateToken() { // based on readTmplToken
  let out = "", chunkStart = this.pos;
  for (;;) {
    if (this.pos >= this.input.length) {
      out += this.input.slice(chunkStart, this.pos);
      return this.finishToken(tt.template, out);
    }
    let ch = this.input.charCodeAt(this.pos);
    if (ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) { // '${'
      out += this.input.slice(chunkStart, this.pos);
      return this.finishToken(tt.template, out);
    }
    ++this.pos;
  }
}
