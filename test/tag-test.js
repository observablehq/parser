import {test} from "tap";
import {toJavaScript} from "../src/tag.js";

const cases = [
  {
    description: "basic",
    tag: 'md',
    value: "# Title",
    expected: "md`# Title`"
  },
  {
    description: "escapes backslashes",
    tag: 'md',
    value: "# Tit\\le",
    expected: "md`# Tit\\\\le`"
  },
  {
    description: "escapes backticks",
    tag: 'md',
    value: "# `Title`",
    expected: "md`# \\`Title\\``"
  },
  {
    description: "doesn't escape backticks inside expression",
    tag: 'md',
    value: "# Title (${`Version: ${'version' + version}`})",
    expected: "md`# Title (${`Version: ${'version' + version}`})`"
  },
  {
    description: "doesn't escape backslashes inside expression",
    tag: 'md',
    value: "# Title (${`Path: C:\\${Path}`})",
    expected: "md`# Title (${`Path: C:\\${Path}`})`"
  },
  {
    description: "doesn't escape backslashes inside expression",
    tag: 'md',
    value: "# Title (${`Version: ${version /* }} */}`})",
    expected: "md`# Title (${`Version: ${version /* }} */}`})`"
  },
  {
    description: "doesn't escape backslashes if raw is true",
    tag: 'tex',
    raw: true,
    value: "1 \\over 2",
    expected: "tex`1 \\over 2`"
  },
];

cases.forEach(({description, value, expected, raw, tag}) => {
  test(description, t => {
    t.equal(toJavaScript(value, tag, raw), expected);
    t.end();
  });
});
