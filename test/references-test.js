import {test} from "tap";
import {parseCell} from "../src/index.js";

test("finds references in expressions", t => {
  t.deepEqual(parseCell(`foo + bar`).references, [
    {type: "Identifier", start: 0, end: 3, name: "foo"},
    {type: "Identifier", start: 6, end: 9, name: "bar"}
  ]);
  t.end();
});

test("finds references in blocks", t => {
  t.deepEqual(parseCell(`{ foo + bar; }`).references, [
    {type: "Identifier", start: 2, end: 5, name: "foo"},
    {type: "Identifier", start: 8, end: 11, name: "bar"}
  ]);
  t.end();
});

test("finds viewof references", t => {
  t.deepEqual(parseCell(`viewof foo + bar`).references, [
    {
      type: "ViewExpression",
      start: 0,
      end: 10,
      id: {type: "Identifier", start: 7, end: 10, name: "foo"}
    },
    {type: "Identifier", start: 13, end: 16, name: "bar"}
  ]);
  t.end();
});

test("finds mutable references", t => {
  t.deepEqual(parseCell(`mutable foo + bar`).references, [
    {
      type: "MutableExpression",
      start: 0,
      end: 11,
      id: {type: "Identifier", start: 8, end: 11, name: "foo"}
    },
    {type: "Identifier", start: 14, end: 17, name: "bar"}
  ]);
  t.end();
});

test("doesn’t consider the identifier a reference", t => {
  t.deepEqual(parseCell(`foo = bar`).references, [
    {type: "Identifier", start: 6, end: 9, name: "bar"}
  ]);
  t.end();
});

test("local variables can mask references", t => {
  t.deepEqual(parseCell(`{ let foo; foo + bar; }`).references, [
    {type: "Identifier", start: 17, end: 20, name: "bar"}
  ]);
  t.end();
});

test("local variables can not mask references", t => {
  t.deepEqual(parseCell(`{ foo + bar; { let foo; } }`).references, [
    {type: "Identifier", start: 2, end: 5, name: "foo"},
    {type: "Identifier", start: 8, end: 11, name: "bar"}
  ]);
  t.end();
});

test("function parameters can mask references", t => {
  t.deepEqual(parseCell(`foo => foo + bar`).references, [
    {type: "Identifier", start: 13, end: 16, name: "bar"}
  ]);
  t.end();
});

test("function rest parameters can mask references", t => {
  t.deepEqual(parseCell(`(...foo) => foo + bar`).references, [
    {type: "Identifier", start: 18, end: 21, name: "bar"}
  ]);
  t.end();
});

test("destructured variables can mask references", t => {
  t.deepEqual(parseCell(`{ let {foo} = null; foo + bar; }`).references, [
    {type: "Identifier", start: 26, end: 29, name: "bar"}
  ]);
  t.end();
});

test("destructured rest variables can mask references", t => {
  t.deepEqual(parseCell(`{ let {...foo} = null; foo + bar; }`).references, [
    {type: "Identifier", start: 29, end: 32, name: "bar"}
  ]);
  t.end();
});

test("ignores globals", t => {
  t.deepEqual(parseCell(`foo + bar`, {globals: ["foo"]}).references, [
    {type: "Identifier", start: 6, end: 9, name: "bar"}
  ]);
  t.end();
});
