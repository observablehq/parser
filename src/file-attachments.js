import {simple} from "acorn-walk";
import walk from "./walk.js";

export default function findFileAttachments(cell) {
  const ast = {type: "Program", body: [cell.body]};
  const references = new Map();

  simple(
    ast,
    {
      CallExpression: node => {
        const {callee, arguments: args} = node;

        // Ignore function calls that are not references to FileAttachment
        if (!(callee.type === "Identifier" && callee.name === "FileAttachment")) return;

        // Forbid all sorts of dynamic uses of FileAttachment
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
              `FileAttachment() requires a single literal string as its argument.`
            ),
            {node}
          );
        }

        const fileReference =
          args[0].type === "Literal" ? args[0].value : args[0].quasis[0].value.cooked;

        if (references.has(fileReference)) {
          references.get(fileReference).push(args[0].start);
        } else {
          references.set(fileReference, [args[0].start]);
        }
      }
    },
    walk
  );

  return references;
}
