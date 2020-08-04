import {performance} from "perf_hooks";
import {parseCell} from "../src/index.js";

function readStdin() {
  return new Promise((resolve, reject) => {
    const chunks = [];
    process.stdin
        .on("error", reject)
        .on("data", (chunk) => chunks.push(chunk))
        .on("end", () => resolve(chunks.join("")))
        .setEncoding("utf8");
  });
}

readStdin().then((input) => {
  const samples = [];

  for (let i = 0; i < 40; ++i) {
    const start = performance.now();
    try {
      parseCell(input);
    } catch (error) {
      if (!(error instanceof SyntaxError)) {
        throw error;
      }
    }
    const end = performance.now();
    samples.push(end - start);
  }

  console.log(samples.sort((a, b) => a - b)[samples.length >> 1]);
});
