import {simple} from "acorn-walk";
import tape from "tape-await";
import {readdirSync, readFileSync, writeFileSync} from "fs";
import {basename, extname, join} from "path";
import {parseCell, peepId} from "../src/index.js";
import walk from "../src/walk.js";

tape('peepId', t => {
  t.equal(peepId('a = 1'), 'a');
  t.equal(peepId('viewof a = 1'), 'a');
  t.equal(peepId('mutable a = 1'), 'a');
  t.equal(peepId('class A {'), 'A');
  t.equal(peepId('function a'), 'a');
  t.equal(peepId('async function a'), 'a');
  t.equal(peepId('function* a'), 'a');
  t.equal(peepId('function /* yeah */ a'), 'a');
});

readdirSync(join("test", "input")).forEach(file => {
  if (extname(file) !== ".js") return;
  tape(`parse ${file}`, test => {
    const infile = join("test", "input", file);
    const outfile = join("test", "output", basename(file, ".js") + ".json");
    let actual, expected;

    try {
      actual = parseCell(readFileSync(infile, "utf8"), {globals: null});
    } catch (error) {
      if (error instanceof ReferenceError
          || error instanceof SyntaxError
          || error instanceof TypeError) {
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

    try {
      expected = JSON.parse(readFileSync(outfile, "utf8"));
    } catch (error) {
      if (error.code === "ENOENT") {
        console.warn(`! generating ${outfile}`);
        writeFileSync(outfile, JSON.stringify(actual, replacer, 2) + "\n", "utf8");
        return;
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

    test.deepEqual(actual, expected);
  });
});

function replacer(key, value) {
  if (typeof value === "bigint") {
    return Number(value);
  }
  return value;
}
