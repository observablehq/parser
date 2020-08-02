import {simple} from "acorn-walk";
import walk from "./walk.js";

export default function findFileAttachments(cell) {
  const ast = {type: "Program", body: [cell.body]};
  const fileAttachments = new Map();
  const {references} = cell;

  simple(
    ast,
    {
      CallExpression: node => {
        const {callee, arguments: args} = node;

        // Ignore function calls that are not references to FileAttachment
        if (
          callee.type !== "Identifier" ||
          callee.name !== "FileAttachment" ||
          references.indexOf(callee) < 0
        ) return;

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
              `FileAttachment() requires a single literal string argument.`
            ),
            {node}
          );
        }

        const [arg] = args;
        const name = arg.type === "Literal" ? arg.value : arg.quasis[0].value.cooked;
        const location = {start: arg.start, end: arg.end};
        if (fileAttachments.has(name)) fileAttachments.get(name).push(location);
        else fileAttachments.set(name, [location]);
      }
    },
    walk
  );

  return fileAttachments;
}
