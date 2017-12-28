import acorn from "acorn";
import observable from "./index";

observable(acorn);

const options = {
  locations: true,
  plugins: {
    observable: true
  }
};

// NamedBlockCell
console.log(JSON.stringify(acorn.parse(`
foo = {
  return 42;
}
`, options), null, 2));

// NamedExpressionCell
console.log(JSON.stringify(acorn.parse(`
name = "value"
`, options), null, 2));

// BlockCell
console.log(JSON.stringify(acorn.parse(`
{
  return 42;
}
`, options), null, 2));

// ExpressionCell
console.log(JSON.stringify(acorn.parse(`
name + 42
`, options), null, 2));

// EmptyCell
console.log(JSON.stringify(acorn.parse(``, options), null, 2));
