import {simple} from "acorn-walk";
import {test} from "tap";
import {readdirSync, readFileSync, writeFileSync} from "fs";
import {basename, extname, join} from "path";
import {parseCell, peekId, parseModule} from "../src/index.js";
import walk from "../src/walk.js";

test("peekId", t => {
  t.equal(peekId("a = 1"), "a");
  t.equal(peekId("viewof a = 1"), "a");
  t.equal(peekId("mutable a = 1"), "a");
  t.equal(peekId("mutable async = 1"), "async");
  t.equal(peekId("class A {"), "A");
  t.equal(peekId("class Z"), undefined);
  t.equal(peekId("class Z "), "Z");
  t.equal(peekId("function a"), undefined);
  t.equal(peekId("function a()"), "a");
  t.equal(peekId("async function a()"), "a");
  t.equal(peekId("function* a"), undefined);
  t.equal(peekId("function /* yeah */ a()"), "a");
  t.equal(peekId("function"), undefined);
  t.equal(peekId("1"), undefined);
  t.equal(peekId("#"), undefined, "Ignores syntax errors");
  t.equal(peekId("abc /"), undefined, "Needs a = for a name to be identified");
  t.equal(peekId("({ a: 1 })"), undefined);
  t.equal(
    peekId(`function queryAll(text, values) {
  return fetch("https://api.observable.localh`),
    "queryAll"
  );
  t.end();
});

test("parseModule", t => {
  t.matchSnapshot(
    parseModule(`a = 1;

b = 2;

c = a + b`)
  );
  t.end();
});

readdirSync(join("test", "input")).forEach(file => {
  const bareExtension = extname(file).replace(".", "");
  test(`parse ${file}`, test => {
    const infile = join("test", "input", file);
    let actual;

    try {
      actual = parseCell(readFileSync(infile, "utf8"), {
        globals: null,
        tag: bareExtension !== 'js' ? bareExtension : undefined,
        raw: bareExtension == 'tex'
      });
    } catch (error) {
      if (
        error instanceof ReferenceError ||
        error instanceof SyntaxError ||
        error instanceof TypeError
      ) {
        actual = {
          error: {
            type: error.constructor.name,
            message: error.message,
            pos: error.pos,
            loc: {
              line: error.loc.line,
              column: error.loc.column
            }
          }
        };
      } else {
        throw error;
      }
    }

    // Treat BigInt as Number for test purposes.
    if (actual.body) {
      simple(
        actual.body,
        {
          Literal(node) {
            if (node.bigint) {
              node.value = Number(node.value);
            }
          }
        },
        walk
      );
    }

    test.matchSnapshot(actual);
    test.end();
  });
});
