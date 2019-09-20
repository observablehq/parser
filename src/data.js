import {simple} from "acorn-walk";
import walk from "./walk.js";

export default function findData(cell) {
  const ast = {type: "Program", body: [cell.body]};
  const dataReferences = new Set();

  simple(
    ast,
    {
      CallExpression: node => {
        const {callee, arguments: args} = node;

        // Ignore function calls that are not references to Data
        if (!(callee.type === "Identifier" && callee.name === "Data")) return;

        // Forbid all sorts of dynamic uses of Data
        if (
          !(
            args.length === 1 &&
            ((args[0].type === "Literal" && /^['"]/.test(args[0].raw)) ||
              (args[0].type === "TemplateLiteral" &&
                args[0].expressions.length === 0))
          )
        ) {
          throw Object.assign(
            new SyntaxError(
              `Data() requires a single literal string as its argument.`
            ),
            {node}
          );
        }

        dataReferences.add(
          args[0].type === "Literal"
            ? args[0].value
            : args[0].quasis[0].value.cooked
        );
      }
    },
    walk
  );

  return dataReferences;
}
