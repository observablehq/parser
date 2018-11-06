import tape from "tape-await";
import {parseCell, findReferences} from "../src/index.js";

tape("finds references in expressions", test => {
  test.deepEqual(findReferences(parseCell(`foo + bar`)), [
    {type: "Identifier", start: 0, end: 3, name: "foo"},
    {type: "Identifier", start: 6, end: 9, name: "bar"}
  ]);
});

tape("finds references in blocks", test => {
  test.deepEqual(findReferences(parseCell(`{ foo + bar; }`)), [
    {type: "Identifier", start: 2, end: 5, name: "foo"},
    {type: "Identifier", start: 8, end: 11, name: "bar"}
  ]);
});

tape("finds viewof references", test => {
  test.deepEqual(findReferences(parseCell(`viewof foo + bar`)), [
    {type: "ViewExpression", start: 0, end: 10, id: {type: "Identifier", start: 7, end: 10, name: 'foo'}},
    {type: "Identifier", start: 13, end: 16, name: "bar"}
  ]);
});

tape("finds mutable references", test => {
  test.deepEqual(findReferences(parseCell(`mutable foo + bar`)), [
    {type: "MutableExpression", start: 0, end: 11, id: {type: "Identifier", start: 8, end: 11, name: 'foo'}},
    {type: "Identifier", start: 14, end: 17, name: "bar"}
  ]);
});

tape("doesn’t consider the identifier a reference", test => {
  test.deepEqual(findReferences(parseCell(`foo = bar`)), [
    {type: "Identifier", start: 6, end: 9, name: "bar"}
  ]);
});

tape("local variables can mask references", test => {
  test.deepEqual(findReferences(parseCell(`{ let foo; foo + bar; }`)), [
    {type: "Identifier", start: 17, end: 20, name: "bar"}
  ]);
});

tape("local variables can not mask references", test => {
  test.deepEqual(findReferences(parseCell(`{ foo + bar; { let foo; } }`)), [
    {type: "Identifier", start: 2, end: 5, name: "foo"},
    {type: "Identifier", start: 8, end: 11, name: "bar"}
  ]);
});

tape("function parameters can mask references", test => {
  test.deepEqual(findReferences(parseCell(`foo => foo + bar`)), [
    {type: "Identifier", start: 13, end: 16, name: "bar"}
  ]);
});

tape("function rest parameters can mask references", test => {
  test.deepEqual(findReferences(parseCell(`(...foo) => foo + bar`)), [
    {type: "Identifier", start: 18, end: 21, name: "bar"}
  ]);
});

tape("destructured variables can mask references", test => {
  test.deepEqual(findReferences(parseCell(`{ let {foo} = null; foo + bar; }`)), [
    {type: "Identifier", start: 26, end: 29, name: "bar"}
  ]);
});

tape("destructured rest variables can mask references", test => {
  test.deepEqual(findReferences(parseCell(`{ let {...foo} = null; foo + bar; }`)), [
    {type: "Identifier", start: 29, end: 32, name: "bar"}
  ]);
});
