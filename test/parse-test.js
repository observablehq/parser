import tape from "tape-await";
import {readdirSync, readFileSync, writeFileSync} from "fs";
import {basename, extname, join} from "path";
import {parseCell} from "../index.js";

readdirSync(join("test", "input")).forEach(file => {
  if (extname(file) !== ".js") return;
  tape(`parse ${file}`, test => {
    const infile = join("test", "input", file);
    const outfile = join("test", "output", basename(file, ".js") + ".json");
    let actual, expected;

    try {
      actual = parseCell(readFileSync(infile, "utf8"));
    } catch (error) {
      if (error instanceof SyntaxError) {
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
        writeFileSync(outfile, JSON.stringify(actual, null, 2) + "\n", "utf8");
        return;
      } else {
        throw error;
      }
    }

    test.deepEqual(actual, expected);
  });
});
