import commonjs from "rollup-plugin-commonjs";
import node from "rollup-plugin-node-resolve";
import {terser} from "rollup-plugin-terser";
import * as meta from "./package.json";

const copyright = `// @observablehq/parser v${meta.version} Copyright ${(new Date).getFullYear()} Observable, Inc.`;

export default [
{
  input: "src/index.js",
  plugins: [
    node(),
    commonjs(),
    terser({
      output: {preamble: copyright},
      mangle: {reserved: ["RequireError"]}
    })
  ],
  output: {
    format: "umd",
    extend: true,
    name: "observablehq",
    file: "dist/parser.js"
  }
}
];
