import tape from "tape-await";
import {parseCell} from "../src/index.js";

tape("finds references in expressions", test => {
  test.deepEqual(parseCell(`foo + bar`).references, [
    {type: "Identifier", start: 0, end: 3, name: "foo"},
    {type: "Identifier", start: 6, end: 9, name: "bar"}
  ]);
});

tape("finds references in blocks", test => {
  test.deepEqual(parseCell(`{ foo + bar; }`).references, [
    {type: "Identifier", start: 2, end: 5, name: "foo"},
    {type: "Identifier", start: 8, end: 11, name: "bar"}
  ]);
});

tape("finds viewof references", test => {
  test.deepEqual(parseCell(`viewof foo + bar`).references, [
    {type: "ViewExpression", start: 0, end: 10, id: {type: "Identifier", start: 7, end: 10, name: 'foo'}},
    {type: "Identifier", start: 13, end: 16, name: "bar"}
  ]);
});

tape("finds mutable references", test => {
  test.deepEqual(parseCell(`mutable foo + bar`).references, [
    {type: "MutableExpression", start: 0, end: 11, id: {type: "Identifier", start: 8, end: 11, name: 'foo'}},
    {type: "Identifier", start: 14, end: 17, name: "bar"}
  ]);
});

tape("doesn’t consider the identifier a reference", test => {
  test.deepEqual(parseCell(`foo = bar`).references, [
    {type: "Identifier", start: 6, end: 9, name: "bar"}
  ]);
});

tape("local variables can mask references", test => {
  test.deepEqual(parseCell(`{ let foo; foo + bar; }`).references, [
    {type: "Identifier", start: 17, end: 20, name: "bar"}
  ]);
});

tape("local variables can not mask references", test => {
  test.deepEqual(parseCell(`{ foo + bar; { let foo; } }`).references, [
    {type: "Identifier", start: 2, end: 5, name: "foo"},
    {type: "Identifier", start: 8, end: 11, name: "bar"}
  ]);
});

tape("function parameters can mask references", test => {
  test.deepEqual(parseCell(`foo => foo + bar`).references, [
    {type: "Identifier", start: 13, end: 16, name: "bar"}
  ]);
});

tape("function rest parameters can mask references", test => {
  test.deepEqual(parseCell(`(...foo) => foo + bar`).references, [
    {type: "Identifier", start: 18, end: 21, name: "bar"}
  ]);
});

tape("destructured variables can mask references", test => {
  test.deepEqual(parseCell(`{ let {foo} = null; foo + bar; }`).references, [
    {type: "Identifier", start: 26, end: 29, name: "bar"}
  ]);
});

tape("destructured rest variables can mask references", test => {
  test.deepEqual(parseCell(`{ let {...foo} = null; foo + bar; }`).references, [
    {type: "Identifier", start: 29, end: 32, name: "bar"}
  ]);
});
