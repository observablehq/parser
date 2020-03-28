/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-test.js TAP parse anonymous-block-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "argument": Node {
          "end": 13,
          "raw": "42",
          "start": 11,
          "type": "Literal",
          "value": 42,
        },
        "end": 14,
        "start": 4,
        "type": "ReturnStatement",
      },
    ],
    "end": 16,
    "start": 0,
    "type": "BlockStatement",
  },
  "end": 17,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse anonymous-expression-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 2,
    "raw": "42",
    "start": 0,
    "type": "Literal",
    "value": 42,
  },
  "end": 3,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse anonymous-function.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": false,
    "body": Node {
      "body": Array [
        Node {
          "argument": Node {
            "end": 22,
            "raw": "42",
            "start": 20,
            "type": "Literal",
            "value": 42,
          },
          "end": 23,
          "start": 13,
          "type": "ReturnStatement",
        },
      ],
      "end": 25,
      "start": 11,
      "type": "BlockStatement",
    },
    "end": 25,
    "expression": false,
    "generator": false,
    "id": null,
    "params": Array [],
    "start": 0,
    "type": "FunctionExpression",
  },
  "end": 26,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse await-block-cell.js > must match snapshot 1`] = `
Node {
  "async": true,
  "body": Node {
    "body": Array [
      Node {
        "end": 18,
        "expression": Node {
          "argument": Node {
            "end": 17,
            "name": "promise",
            "start": 10,
            "type": "Identifier",
          },
          "end": 17,
          "start": 4,
          "type": "AwaitExpression",
        },
        "start": 4,
        "type": "ExpressionStatement",
      },
    ],
    "end": 20,
    "start": 0,
    "type": "BlockStatement",
  },
  "end": 21,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 17,
      "name": "promise",
      "start": 10,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse await-in-arrow-function-expression.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": true,
    "body": Node {
      "body": Array [
        Node {
          "end": 30,
          "expression": Node {
            "argument": Node {
              "end": 29,
              "name": "promise",
              "start": 22,
              "type": "Identifier",
            },
            "end": 29,
            "start": 16,
            "type": "AwaitExpression",
          },
          "start": 16,
          "type": "ExpressionStatement",
        },
      ],
      "end": 32,
      "start": 12,
      "type": "BlockStatement",
    },
    "end": 32,
    "expression": false,
    "generator": false,
    "id": null,
    "params": Array [],
    "start": 0,
    "type": "ArrowFunctionExpression",
  },
  "end": 33,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 29,
      "name": "promise",
      "start": 22,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse await-in-arrow-function.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "declarations": Array [
          Node {
            "end": 54,
            "id": Node {
              "end": 15,
              "name": "inner",
              "start": 10,
              "type": "Identifier",
            },
            "init": Node {
              "async": true,
              "body": Node {
                "body": Array [
                  Node {
                    "end": 50,
                    "expression": Node {
                      "argument": Node {
                        "end": 49,
                        "name": "promise",
                        "start": 42,
                        "type": "Identifier",
                      },
                      "end": 49,
                      "start": 36,
                      "type": "AwaitExpression",
                    },
                    "start": 36,
                    "type": "ExpressionStatement",
                  },
                ],
                "end": 54,
                "start": 30,
                "type": "BlockStatement",
              },
              "end": 54,
              "expression": false,
              "generator": false,
              "id": null,
              "params": Array [],
              "start": 18,
              "type": "ArrowFunctionExpression",
            },
            "start": 10,
            "type": "VariableDeclarator",
          },
        ],
        "end": 55,
        "kind": "const",
        "start": 4,
        "type": "VariableDeclaration",
      },
    ],
    "end": 57,
    "start": 0,
    "type": "BlockStatement",
  },
  "end": 58,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 49,
      "name": "promise",
      "start": 42,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse await-in-class.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "body": Node {
          "body": Array [
            Node {
              "computed": false,
              "end": 65,
              "key": Node {
                "end": 34,
                "name": "method",
                "start": 28,
                "type": "Identifier",
              },
              "kind": "method",
              "start": 22,
              "static": false,
              "type": "MethodDefinition",
              "value": Node {
                "async": true,
                "body": Node {
                  "body": Array [
                    Node {
                      "end": 59,
                      "expression": Node {
                        "argument": Node {
                          "end": 58,
                          "name": "promise",
                          "start": 51,
                          "type": "Identifier",
                        },
                        "end": 58,
                        "start": 45,
                        "type": "AwaitExpression",
                      },
                      "start": 45,
                      "type": "ExpressionStatement",
                    },
                  ],
                  "end": 65,
                  "start": 37,
                  "type": "BlockStatement",
                },
                "end": 65,
                "expression": false,
                "generator": false,
                "id": null,
                "params": Array [],
                "start": 34,
                "type": "FunctionExpression",
              },
            },
          ],
          "end": 69,
          "start": 16,
          "type": "ClassBody",
        },
        "end": 69,
        "id": Node {
          "end": 15,
          "name": "Inner",
          "start": 10,
          "type": "Identifier",
        },
        "start": 4,
        "superClass": null,
        "type": "ClassDeclaration",
      },
    ],
    "end": 71,
    "start": 0,
    "type": "BlockStatement",
  },
  "end": 72,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 58,
      "name": "promise",
      "start": 51,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse await-in-function.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "async": true,
        "body": Node {
          "body": Array [
            Node {
              "end": 47,
              "expression": Node {
                "argument": Node {
                  "end": 46,
                  "name": "promise",
                  "start": 39,
                  "type": "Identifier",
                },
                "end": 46,
                "start": 33,
                "type": "AwaitExpression",
              },
              "start": 33,
              "type": "ExpressionStatement",
            },
          ],
          "end": 51,
          "start": 27,
          "type": "BlockStatement",
        },
        "end": 51,
        "expression": false,
        "generator": false,
        "id": Node {
          "end": 24,
          "name": "inner",
          "start": 19,
          "type": "Identifier",
        },
        "params": Array [],
        "start": 4,
        "type": "FunctionDeclaration",
      },
    ],
    "end": 53,
    "start": 0,
    "type": "BlockStatement",
  },
  "end": 54,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 46,
      "name": "promise",
      "start": 39,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse await-yield.js > must match snapshot 1`] = `
Node {
  "async": true,
  "body": Node {
    "body": Array [
      Node {
        "end": 18,
        "expression": Node {
          "argument": Node {
            "end": 17,
            "name": "promise",
            "start": 10,
            "type": "Identifier",
          },
          "end": 17,
          "start": 4,
          "type": "AwaitExpression",
        },
        "start": 4,
        "type": "ExpressionStatement",
      },
      Node {
        "end": 33,
        "expression": Node {
          "argument": Node {
            "end": 32,
            "name": "value",
            "start": 27,
            "type": "Identifier",
          },
          "delegate": false,
          "end": 32,
          "start": 21,
          "type": "YieldExpression",
        },
        "start": 21,
        "type": "ExpressionStatement",
      },
    ],
    "end": 35,
    "start": 0,
    "type": "BlockStatement",
  },
  "end": 36,
  "fileAttachments": Map {},
  "generator": true,
  "id": null,
  "references": Array [
    Node {
      "end": 17,
      "name": "promise",
      "start": 10,
      "type": "Identifier",
    },
    Node {
      "end": 32,
      "name": "value",
      "start": 27,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse bare-dynamic-import.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 13,
    "source": Node {
      "end": 12,
      "raw": "\\"bar\\"",
      "start": 7,
      "type": "Literal",
      "value": "bar",
    },
    "start": 0,
    "type": "ImportExpression",
  },
  "end": 14,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse bigint-zero.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "bigint": "0",
    "end": 2,
    "raw": "0n",
    "start": 0,
    "type": "Literal",
    "value": 0,
  },
  "end": 3,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse bigint.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 9,
    "left": Node {
      "end": 3,
      "name": "foo",
      "start": 0,
      "type": "Identifier",
    },
    "operator": "+",
    "right": Node {
      "bigint": "42",
      "end": 9,
      "raw": "42n",
      "start": 6,
      "type": "Literal",
      "value": 42,
    },
    "start": 0,
    "type": "BinaryExpression",
  },
  "end": 10,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 3,
      "name": "foo",
      "start": 0,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse binary-expression.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 8,
    "left": Node {
      "end": 3,
      "name": "foo",
      "start": 0,
      "type": "Identifier",
    },
    "operator": "+",
    "right": Node {
      "end": 8,
      "raw": "42",
      "start": 6,
      "type": "Literal",
      "value": 42,
    },
    "start": 0,
    "type": "BinaryExpression",
  },
  "end": 9,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 3,
      "name": "foo",
      "start": 0,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse block-leading-comment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "argument": Node {
          "end": 40,
          "raw": "42",
          "start": 38,
          "type": "Literal",
          "value": 42,
        },
        "end": 41,
        "start": 31,
        "type": "ReturnStatement",
      },
    ],
    "end": 43,
    "start": 27,
    "type": "BlockStatement",
  },
  "end": 44,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 24,
    "name": "foo",
    "start": 21,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse block-trailing-comment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "argument": Node {
          "end": 19,
          "raw": "42",
          "start": 17,
          "type": "Literal",
          "value": 42,
        },
        "end": 20,
        "start": 10,
        "type": "ReturnStatement",
      },
    ],
    "end": 22,
    "start": 6,
    "type": "BlockStatement",
  },
  "end": 42,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 3,
    "name": "foo",
    "start": 0,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse catch-clause.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "block": Node {
          "body": Array [
            Node {
              "declarations": Array [
                Node {
                  "end": 25,
                  "id": Node {
                    "elements": Array [
                      Node {
                        "end": 20,
                        "name": "x",
                        "start": 19,
                        "type": "Identifier",
                      },
                    ],
                    "end": 21,
                    "start": 18,
                    "type": "ArrayPattern",
                  },
                  "init": Node {
                    "end": 25,
                    "name": "y",
                    "start": 24,
                    "type": "Identifier",
                  },
                  "start": 18,
                  "type": "VariableDeclarator",
                },
              ],
              "end": 26,
              "kind": "let",
              "start": 14,
              "type": "VariableDeclaration",
            },
            Node {
              "end": 35,
              "expression": Node {
                "argument": Node {
                  "end": 32,
                  "name": "x",
                  "start": 31,
                  "type": "Identifier",
                },
                "end": 34,
                "operator": "++",
                "prefix": false,
                "start": 31,
                "type": "UpdateExpression",
              },
              "start": 31,
              "type": "ExpressionStatement",
            },
            Node {
              "argument": Node {
                "end": 48,
                "name": "x",
                "start": 47,
                "type": "Identifier",
              },
              "end": 49,
              "start": 40,
              "type": "ReturnStatement",
            },
          ],
          "end": 53,
          "start": 8,
          "type": "BlockStatement",
        },
        "end": 83,
        "finalizer": null,
        "handler": Node {
          "body": Node {
            "body": Array [
              Node {
                "argument": Node {
                  "end": 78,
                  "name": "e",
                  "start": 77,
                  "type": "Identifier",
                },
                "end": 79,
                "start": 70,
                "type": "ReturnStatement",
              },
            ],
            "end": 83,
            "start": 64,
            "type": "BlockStatement",
          },
          "end": 83,
          "param": Node {
            "end": 62,
            "name": "e",
            "start": 61,
            "type": "Identifier",
          },
          "start": 54,
          "type": "CatchClause",
        },
        "start": 4,
        "type": "TryStatement",
      },
    ],
    "end": 85,
    "start": 0,
    "type": "BlockStatement",
  },
  "end": 86,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 25,
      "name": "y",
      "start": 24,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse comma-then-comment.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 0,
      "line": 2,
    },
    "message": "Unexpected end of input (2:0)",
    "pos": 30,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse comment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": null,
  "end": 19,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse computed-property-name.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": false,
    "body": Node {
      "end": 27,
      "name": "value",
      "start": 22,
      "type": "Identifier",
    },
    "end": 27,
    "expression": true,
    "generator": false,
    "id": null,
    "params": Array [
      Node {
        "end": 17,
        "properties": Array [
          Node {
            "computed": true,
            "end": 16,
            "key": Node {
              "end": 8,
              "name": "field",
              "start": 3,
              "type": "Identifier",
            },
            "kind": "init",
            "method": false,
            "shorthand": false,
            "start": 2,
            "type": "Property",
            "value": Node {
              "end": 16,
              "name": "value",
              "start": 11,
              "type": "Identifier",
            },
          },
        ],
        "start": 1,
        "type": "ObjectPattern",
      },
    ],
    "start": 0,
    "type": "ArrowFunctionExpression",
  },
  "end": 28,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 8,
      "name": "field",
      "start": 3,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse destructured-arrow-with-default.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": false,
    "body": Node {
      "body": Array [],
      "end": 31,
      "start": 29,
      "type": "BlockStatement",
    },
    "end": 31,
    "expression": false,
    "generator": false,
    "id": null,
    "params": Array [
      Node {
        "end": 24,
        "properties": Array [
          Node {
            "computed": false,
            "end": 23,
            "key": Node {
              "end": 11,
              "name": "foo",
              "start": 8,
              "type": "Identifier",
            },
            "kind": "init",
            "method": false,
            "shorthand": true,
            "start": 8,
            "type": "Property",
            "value": Node {
              "end": 23,
              "left": Node {
                "end": 11,
                "name": "foo",
                "start": 8,
                "type": "Identifier",
              },
              "right": Node {
                "end": 23,
                "raw": "\\"default\\"",
                "start": 14,
                "type": "Literal",
                "value": "default",
              },
              "start": 8,
              "type": "AssignmentPattern",
            },
          },
        ],
        "start": 7,
        "type": "ObjectPattern",
      },
    ],
    "start": 6,
    "type": "ArrowFunctionExpression",
  },
  "end": 32,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 3,
    "name": "fun",
    "start": 0,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse destructured-object-with-default.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": false,
    "body": Node {
      "body": Array [],
      "end": 34,
      "start": 32,
      "type": "BlockStatement",
    },
    "end": 34,
    "expression": false,
    "generator": false,
    "id": Node {
      "end": 12,
      "name": "fun",
      "start": 9,
      "type": "Identifier",
    },
    "params": Array [
      Node {
        "end": 30,
        "properties": Array [
          Node {
            "computed": false,
            "end": 29,
            "key": Node {
              "end": 17,
              "name": "foo",
              "start": 14,
              "type": "Identifier",
            },
            "kind": "init",
            "method": false,
            "shorthand": true,
            "start": 14,
            "type": "Property",
            "value": Node {
              "end": 29,
              "left": Node {
                "end": 17,
                "name": "foo",
                "start": 14,
                "type": "Identifier",
              },
              "right": Node {
                "end": 29,
                "raw": "\\"default\\"",
                "start": 20,
                "type": "Literal",
                "value": "default",
              },
              "start": 14,
              "type": "AssignmentPattern",
            },
          },
        ],
        "start": 13,
        "type": "ObjectPattern",
      },
    ],
    "start": 0,
    "type": "FunctionExpression",
  },
  "end": 35,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 12,
    "name": "fun",
    "start": 9,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse dynamic-import.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 19,
    "source": Node {
      "end": 18,
      "raw": "\\"bar\\"",
      "start": 13,
      "type": "Literal",
      "value": "bar",
    },
    "start": 6,
    "type": "ImportExpression",
  },
  "end": 20,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 3,
    "name": "foo",
    "start": 0,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse empty.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": null,
  "end": 0,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse expression-extra.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 4,
      "line": 1,
    },
    "message": "Unexpected token (1:4)",
    "pos": 4,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse expression-trailing-comment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 8,
    "raw": "42",
    "start": 6,
    "type": "Literal",
    "value": 42,
  },
  "end": 28,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 3,
    "name": "foo",
    "start": 0,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse extra-semicolon.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 8,
    "raw": "42",
    "start": 6,
    "type": "Literal",
    "value": 42,
  },
  "end": 10,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 3,
    "name": "foo",
    "start": 0,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse file-attachment-forbidden-1.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 4,
      "line": 1,
    },
    "message": "FileAttachment() requires a single literal string as its argument. (1:4)",
    "pos": 4,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse file-attachment-forbidden.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 4,
      "line": 1,
    },
    "message": "FileAttachment() requires a single literal string as its argument. (1:4)",
    "pos": 4,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse file-attachment-nested.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "body": Node {
          "body": Array [
            Node {
              "declarations": Array [
                Node {
                  "end": 49,
                  "id": Node {
                    "end": 49,
                    "name": "b",
                    "start": 48,
                    "type": "Identifier",
                  },
                  "init": null,
                  "start": 48,
                  "type": "VariableDeclarator",
                },
                Node {
                  "end": 52,
                  "id": Node {
                    "end": 52,
                    "name": "c",
                    "start": 51,
                    "type": "Identifier",
                  },
                  "init": null,
                  "start": 51,
                  "type": "VariableDeclarator",
                },
              ],
              "end": 53,
              "kind": "let",
              "start": 44,
              "type": "VariableDeclaration",
            },
            Node {
              "declarations": Array [
                Node {
                  "end": 87,
                  "id": Node {
                    "end": 65,
                    "name": "a",
                    "start": 64,
                    "type": "Identifier",
                  },
                  "init": Node {
                    "arguments": Array [
                      Node {
                        "end": 86,
                        "raw": "\\"a\\"",
                        "start": 83,
                        "type": "Literal",
                        "value": "a",
                      },
                    ],
                    "callee": Node {
                      "end": 82,
                      "name": "FileAttachment",
                      "start": 68,
                      "type": "Identifier",
                    },
                    "end": 87,
                    "start": 68,
                    "type": "CallExpression",
                  },
                  "start": 64,
                  "type": "VariableDeclarator",
                },
              ],
              "end": 88,
              "kind": "const",
              "start": 58,
              "type": "VariableDeclaration",
            },
            Node {
              "alternate": null,
              "consequent": Node {
                "body": Array [
                  Node {
                    "end": 173,
                    "expression": Node {
                      "end": 172,
                      "left": Node {
                        "end": 117,
                        "name": "b",
                        "start": 116,
                        "type": "Identifier",
                      },
                      "operator": "=",
                      "right": Node {
                        "alternate": Node {
                          "arguments": Array [
                            Node {
                              "end": 171,
                              "raw": "'b'",
                              "start": 168,
                              "type": "Literal",
                              "value": "b",
                            },
                          ],
                          "callee": Node {
                            "end": 167,
                            "name": "FileAttachment",
                            "start": 153,
                            "type": "Identifier",
                          },
                          "end": 172,
                          "start": 153,
                          "type": "CallExpression",
                        },
                        "consequent": Node {
                          "end": 150,
                          "name": "defaultFileValue",
                          "start": 134,
                          "type": "Identifier",
                        },
                        "end": 172,
                        "start": 120,
                        "test": Node {
                          "end": 131,
                          "name": "defaultFile",
                          "start": 120,
                          "type": "Identifier",
                        },
                        "type": "ConditionalExpression",
                      },
                      "start": 116,
                      "type": "AssignmentExpression",
                    },
                    "start": 116,
                    "type": "ExpressionStatement",
                  },
                  Node {
                    "end": 204,
                    "expression": Node {
                      "end": 203,
                      "left": Node {
                        "end": 181,
                        "name": "c",
                        "start": 180,
                        "type": "Identifier",
                      },
                      "operator": "=",
                      "right": Node {
                        "arguments": Array [
                          Node {
                            "end": 202,
                            "expressions": Array [],
                            "quasis": Array [
                              Node {
                                "end": 201,
                                "start": 200,
                                "tail": true,
                                "type": "TemplateElement",
                                "value": Object {
                                  "cooked": "c",
                                  "raw": "c",
                                },
                              },
                            ],
                            "start": 199,
                            "type": "TemplateLiteral",
                          },
                        ],
                        "callee": Node {
                          "end": 198,
                          "name": "FileAttachment",
                          "start": 184,
                          "type": "Identifier",
                        },
                        "end": 203,
                        "start": 184,
                        "type": "CallExpression",
                      },
                      "start": 180,
                      "type": "AssignmentExpression",
                    },
                    "start": 180,
                    "type": "ExpressionStatement",
                  },
                ],
                "end": 210,
                "start": 108,
                "type": "BlockStatement",
              },
              "end": 210,
              "start": 93,
              "test": Node {
                "end": 106,
                "name": "condition",
                "start": 97,
                "type": "Identifier",
              },
              "type": "IfStatement",
            },
          ],
          "end": 214,
          "start": 38,
          "type": "BlockStatement",
        },
        "end": 214,
        "start": 20,
        "test": Node {
          "end": 36,
          "left": Node {
            "end": 32,
            "name": "count",
            "start": 27,
            "type": "Identifier",
          },
          "operator": ">",
          "right": Node {
            "end": 36,
            "raw": "0",
            "start": 35,
            "type": "Literal",
            "value": 0,
          },
          "start": 27,
          "type": "BinaryExpression",
        },
        "type": "WhileStatement",
      },
      Node {
        "argument": Node {
          "arguments": Array [
            Node {
              "end": 231,
              "name": "a",
              "start": 230,
              "type": "Identifier",
            },
            Node {
              "end": 234,
              "name": "b",
              "start": 233,
              "type": "Identifier",
            },
            Node {
              "end": 237,
              "name": "c",
              "start": 236,
              "type": "Identifier",
            },
          ],
          "callee": Node {
            "end": 229,
            "name": "input",
            "start": 224,
            "type": "Identifier",
          },
          "end": 238,
          "start": 224,
          "type": "CallExpression",
        },
        "end": 239,
        "start": 217,
        "type": "ReturnStatement",
      },
    ],
    "end": 241,
    "start": 16,
    "type": "BlockStatement",
  },
  "end": 242,
  "fileAttachments": Map {
    "a" => Array [
      Object {
        "end": 86,
        "start": 83,
      },
    ],
    "b" => Array [
      Object {
        "end": 171,
        "start": 168,
      },
    ],
    "c" => Array [
      Object {
        "end": 202,
        "start": 199,
      },
    ],
  },
  "generator": false,
  "id": Node {
    "end": 13,
    "id": Node {
      "end": 13,
      "name": "slider",
      "start": 7,
      "type": "Identifier",
    },
    "start": 0,
    "type": "ViewExpression",
  },
  "references": Array [
    Node {
      "end": 32,
      "name": "count",
      "start": 27,
      "type": "Identifier",
    },
    Node {
      "end": 82,
      "name": "FileAttachment",
      "start": 68,
      "type": "Identifier",
    },
    Node {
      "end": 106,
      "name": "condition",
      "start": 97,
      "type": "Identifier",
    },
    Node {
      "end": 131,
      "name": "defaultFile",
      "start": 120,
      "type": "Identifier",
    },
    Node {
      "end": 150,
      "name": "defaultFileValue",
      "start": 134,
      "type": "Identifier",
    },
    Node {
      "end": 167,
      "name": "FileAttachment",
      "start": 153,
      "type": "Identifier",
    },
    Node {
      "end": 198,
      "name": "FileAttachment",
      "start": 184,
      "type": "Identifier",
    },
    Node {
      "end": 229,
      "name": "input",
      "start": 224,
      "type": "Identifier",
    },
    Node {
      "end": 231,
      "name": "a",
      "start": 230,
      "type": "Identifier",
    },
    Node {
      "end": 234,
      "name": "b",
      "start": 233,
      "type": "Identifier",
    },
    Node {
      "end": 237,
      "name": "c",
      "start": 236,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse file-attachment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "declarations": Array [
          Node {
            "end": 31,
            "id": Node {
              "end": 9,
              "name": "a",
              "start": 8,
              "type": "Identifier",
            },
            "init": Node {
              "arguments": Array [
                Node {
                  "end": 30,
                  "raw": "\\"a\\"",
                  "start": 27,
                  "type": "Literal",
                  "value": "a",
                },
              ],
              "callee": Node {
                "end": 26,
                "name": "FileAttachment",
                "start": 12,
                "type": "Identifier",
              },
              "end": 31,
              "start": 12,
              "type": "CallExpression",
            },
            "start": 8,
            "type": "VariableDeclarator",
          },
        ],
        "end": 32,
        "kind": "let",
        "start": 4,
        "type": "VariableDeclaration",
      },
      Node {
        "declarations": Array [
          Node {
            "end": 62,
            "id": Node {
              "end": 40,
              "name": "b",
              "start": 39,
              "type": "Identifier",
            },
            "init": Node {
              "arguments": Array [
                Node {
                  "end": 61,
                  "raw": "'b'",
                  "start": 58,
                  "type": "Literal",
                  "value": "b",
                },
              ],
              "callee": Node {
                "end": 57,
                "name": "FileAttachment",
                "start": 43,
                "type": "Identifier",
              },
              "end": 62,
              "start": 43,
              "type": "CallExpression",
            },
            "start": 39,
            "type": "VariableDeclarator",
          },
        ],
        "end": 63,
        "kind": "let",
        "start": 35,
        "type": "VariableDeclaration",
      },
      Node {
        "declarations": Array [
          Node {
            "end": 93,
            "id": Node {
              "end": 71,
              "name": "c",
              "start": 70,
              "type": "Identifier",
            },
            "init": Node {
              "arguments": Array [
                Node {
                  "end": 92,
                  "expressions": Array [],
                  "quasis": Array [
                    Node {
                      "end": 91,
                      "start": 90,
                      "tail": true,
                      "type": "TemplateElement",
                      "value": Object {
                        "cooked": "c",
                        "raw": "c",
                      },
                    },
                  ],
                  "start": 89,
                  "type": "TemplateLiteral",
                },
              ],
              "callee": Node {
                "end": 88,
                "name": "FileAttachment",
                "start": 74,
                "type": "Identifier",
              },
              "end": 93,
              "start": 74,
              "type": "CallExpression",
            },
            "start": 70,
            "type": "VariableDeclarator",
          },
        ],
        "end": 94,
        "kind": "let",
        "start": 66,
        "type": "VariableDeclaration",
      },
      Node {
        "declarations": Array [
          Node {
            "end": 125,
            "id": Node {
              "end": 103,
              "name": "c2",
              "start": 101,
              "type": "Identifier",
            },
            "init": Node {
              "arguments": Array [
                Node {
                  "end": 124,
                  "raw": "\\"c\\"",
                  "start": 121,
                  "type": "Literal",
                  "value": "c",
                },
              ],
              "callee": Node {
                "end": 120,
                "name": "FileAttachment",
                "start": 106,
                "type": "Identifier",
              },
              "end": 125,
              "start": 106,
              "type": "CallExpression",
            },
            "start": 101,
            "type": "VariableDeclarator",
          },
        ],
        "end": 126,
        "kind": "let",
        "start": 97,
        "type": "VariableDeclaration",
      },
    ],
    "end": 128,
    "start": 0,
    "type": "BlockStatement",
  },
  "end": 129,
  "fileAttachments": Map {
    "a" => Array [
      Object {
        "end": 30,
        "start": 27,
      },
    ],
    "b" => Array [
      Object {
        "end": 61,
        "start": 58,
      },
    ],
    "c" => Array [
      Object {
        "end": 92,
        "start": 89,
      },
      Object {
        "end": 124,
        "start": 121,
      },
    ],
  },
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 26,
      "name": "FileAttachment",
      "start": 12,
      "type": "Identifier",
    },
    Node {
      "end": 57,
      "name": "FileAttachment",
      "start": 43,
      "type": "Identifier",
    },
    Node {
      "end": 88,
      "name": "FileAttachment",
      "start": 74,
      "type": "Identifier",
    },
    Node {
      "end": 120,
      "name": "FileAttachment",
      "start": 106,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse for-await-generator.js > must match snapshot 1`] = `
Node {
  "async": true,
  "body": Node {
    "body": Array [
      Node {
        "await": true,
        "body": Node {
          "body": Array [
            Node {
              "end": 55,
              "expression": Node {
                "argument": Node {
                  "end": 54,
                  "name": "value",
                  "start": 49,
                  "type": "Identifier",
                },
                "delegate": false,
                "end": 54,
                "start": 43,
                "type": "YieldExpression",
              },
              "start": 43,
              "type": "ExpressionStatement",
            },
          ],
          "end": 59,
          "start": 37,
          "type": "BlockStatement",
        },
        "end": 59,
        "left": Node {
          "declarations": Array [
            Node {
              "end": 26,
              "id": Node {
                "end": 26,
                "name": "value",
                "start": 21,
                "type": "Identifier",
              },
              "init": null,
              "start": 21,
              "type": "VariableDeclarator",
            },
          ],
          "end": 26,
          "kind": "const",
          "start": 15,
          "type": "VariableDeclaration",
        },
        "right": Node {
          "arguments": Array [],
          "callee": Node {
            "end": 33,
            "name": "foo",
            "start": 30,
            "type": "Identifier",
          },
          "end": 35,
          "start": 30,
          "type": "CallExpression",
        },
        "start": 4,
        "type": "ForOfStatement",
      },
    ],
    "end": 61,
    "start": 0,
    "type": "BlockStatement",
  },
  "end": 62,
  "fileAttachments": Map {},
  "generator": true,
  "id": null,
  "references": Array [
    Node {
      "end": 33,
      "name": "foo",
      "start": 30,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse for-await-in-function.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": true,
    "body": Node {
      "body": Array [
        Node {
          "declarations": Array [
            Node {
              "end": 42,
              "id": Node {
                "end": 37,
                "name": "values",
                "start": 31,
                "type": "Identifier",
              },
              "init": Node {
                "elements": Array [],
                "end": 42,
                "start": 40,
                "type": "ArrayExpression",
              },
              "start": 31,
              "type": "VariableDeclarator",
            },
          ],
          "end": 43,
          "kind": "const",
          "start": 25,
          "type": "VariableDeclaration",
        },
        Node {
          "await": true,
          "body": Node {
            "body": Array [
              Node {
                "end": 104,
                "expression": Node {
                  "arguments": Array [
                    Node {
                      "end": 102,
                      "name": "value",
                      "start": 97,
                      "type": "Identifier",
                    },
                  ],
                  "callee": Node {
                    "computed": false,
                    "end": 96,
                    "object": Node {
                      "end": 91,
                      "name": "values",
                      "start": 85,
                      "type": "Identifier",
                    },
                    "property": Node {
                      "end": 96,
                      "name": "push",
                      "start": 92,
                      "type": "Identifier",
                    },
                    "start": 85,
                    "type": "MemberExpression",
                  },
                  "end": 103,
                  "start": 85,
                  "type": "CallExpression",
                },
                "start": 85,
                "type": "ExpressionStatement",
              },
            ],
            "end": 108,
            "start": 79,
            "type": "BlockStatement",
          },
          "end": 108,
          "left": Node {
            "declarations": Array [
              Node {
                "end": 68,
                "id": Node {
                  "end": 68,
                  "name": "value",
                  "start": 63,
                  "type": "Identifier",
                },
                "init": null,
                "start": 63,
                "type": "VariableDeclarator",
              },
            ],
            "end": 68,
            "kind": "const",
            "start": 57,
            "type": "VariableDeclaration",
          },
          "right": Node {
            "arguments": Array [],
            "callee": Node {
              "end": 75,
              "name": "foo",
              "start": 72,
              "type": "Identifier",
            },
            "end": 77,
            "start": 72,
            "type": "CallExpression",
          },
          "start": 46,
          "type": "ForOfStatement",
        },
        Node {
          "argument": Node {
            "end": 124,
            "name": "values",
            "start": 118,
            "type": "Identifier",
          },
          "end": 125,
          "start": 111,
          "type": "ReturnStatement",
        },
      ],
      "end": 127,
      "start": 21,
      "type": "BlockStatement",
    },
    "end": 127,
    "expression": false,
    "generator": false,
    "id": Node {
      "end": 18,
      "name": "bar",
      "start": 15,
      "type": "Identifier",
    },
    "params": Array [],
    "start": 0,
    "type": "FunctionExpression",
  },
  "end": 128,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 18,
    "name": "bar",
    "start": 15,
    "type": "Identifier",
  },
  "references": Array [
    Node {
      "end": 75,
      "name": "foo",
      "start": 72,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse for-await.js > must match snapshot 1`] = `
Node {
  "async": true,
  "body": Node {
    "body": Array [
      Node {
        "declarations": Array [
          Node {
            "end": 21,
            "id": Node {
              "end": 16,
              "name": "values",
              "start": 10,
              "type": "Identifier",
            },
            "init": Node {
              "elements": Array [],
              "end": 21,
              "start": 19,
              "type": "ArrayExpression",
            },
            "start": 10,
            "type": "VariableDeclarator",
          },
        ],
        "end": 22,
        "kind": "const",
        "start": 4,
        "type": "VariableDeclaration",
      },
      Node {
        "await": true,
        "body": Node {
          "body": Array [
            Node {
              "end": 83,
              "expression": Node {
                "arguments": Array [
                  Node {
                    "end": 81,
                    "name": "value",
                    "start": 76,
                    "type": "Identifier",
                  },
                ],
                "callee": Node {
                  "computed": false,
                  "end": 75,
                  "object": Node {
                    "end": 70,
                    "name": "values",
                    "start": 64,
                    "type": "Identifier",
                  },
                  "property": Node {
                    "end": 75,
                    "name": "push",
                    "start": 71,
                    "type": "Identifier",
                  },
                  "start": 64,
                  "type": "MemberExpression",
                },
                "end": 82,
                "start": 64,
                "type": "CallExpression",
              },
              "start": 64,
              "type": "ExpressionStatement",
            },
          ],
          "end": 87,
          "start": 58,
          "type": "BlockStatement",
        },
        "end": 87,
        "left": Node {
          "declarations": Array [
            Node {
              "end": 47,
              "id": Node {
                "end": 47,
                "name": "value",
                "start": 42,
                "type": "Identifier",
              },
              "init": null,
              "start": 42,
              "type": "VariableDeclarator",
            },
          ],
          "end": 47,
          "kind": "const",
          "start": 36,
          "type": "VariableDeclaration",
        },
        "right": Node {
          "arguments": Array [],
          "callee": Node {
            "end": 54,
            "name": "foo",
            "start": 51,
            "type": "Identifier",
          },
          "end": 56,
          "start": 51,
          "type": "CallExpression",
        },
        "start": 25,
        "type": "ForOfStatement",
      },
      Node {
        "argument": Node {
          "end": 103,
          "name": "values",
          "start": 97,
          "type": "Identifier",
        },
        "end": 104,
        "start": 90,
        "type": "ReturnStatement",
      },
    ],
    "end": 106,
    "start": 0,
    "type": "BlockStatement",
  },
  "end": 107,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 54,
      "name": "foo",
      "start": 51,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse global-assignment.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 2,
      "line": 2,
    },
    "message": "Assignment to constant variable foo (2:2)",
    "pos": 4,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse illegal-arguments.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 4,
      "line": 1,
    },
    "message": "arguments is not allowed (1:4)",
    "pos": 4,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse illegal-arrow-arguments.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 6,
      "line": 1,
    },
    "message": "arguments is not allowed (1:6)",
    "pos": 6,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse import-as-duplicate.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 20,
      "line": 1,
    },
    "message": "Identifier 'foo' has already been declared (1:20)",
    "pos": 20,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse import-default-as.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 8,
      "line": 1,
    },
    "message": "Unexpected keyword 'default' (1:8)",
    "pos": 8,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse import-default.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 7,
      "line": 1,
    },
    "message": "Unexpected token (1:7)",
    "pos": 7,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse import-duplicate.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 13,
      "line": 1,
    },
    "message": "Identifier 'foo' has already been declared (1:13)",
    "pos": 13,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse import-empty.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 23,
    "factory": false,
    "source": Node {
      "end": 23,
      "raw": "\\"module\\"",
      "start": 15,
      "type": "Literal",
      "value": "module",
    },
    "specifiers": Array [],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 24,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse import-extra.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 39,
      "line": 1,
    },
    "message": "Unexpected token (1:39)",
    "pos": 39,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse import-factory-with.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": null,
      "line": 1,
    },
    "message": "Factory imports cannot have \\"with\\" Import Specifiers (1:NaN)",
    "pos": undefined,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse import-factory.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 36,
    "factory": true,
    "source": Node {
      "end": 36,
      "raw": "\\"source\\"",
      "start": 28,
      "type": "Literal",
      "value": "source",
    },
    "specifiers": Array [
      Node {
        "end": 15,
        "imported": Node {
          "end": 15,
          "name": "chart",
          "start": 10,
          "type": "Identifier",
        },
        "local": Node {
          "end": 15,
          "name": "chart",
          "start": 10,
          "type": "Identifier",
        },
        "mutable": false,
        "start": 10,
        "type": "ImportSpecifier",
        "view": false,
      },
      Node {
        "end": 21,
        "imported": Node {
          "end": 21,
          "name": "data",
          "start": 17,
          "type": "Identifier",
        },
        "local": Node {
          "end": 21,
          "name": "data",
          "start": 17,
          "type": "Identifier",
        },
        "mutable": false,
        "start": 17,
        "type": "ImportSpecifier",
        "view": false,
      },
    ],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 37,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse import-mutable-as.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 41,
    "factory": false,
    "source": Node {
      "end": 41,
      "raw": "\\"module\\"",
      "start": 33,
      "type": "Literal",
      "value": "module",
    },
    "specifiers": Array [
      Node {
        "end": 26,
        "imported": Node {
          "end": 19,
          "name": "foo",
          "start": 16,
          "type": "Identifier",
        },
        "local": Node {
          "end": 26,
          "name": "bar",
          "start": 23,
          "type": "Identifier",
        },
        "mutable": true,
        "start": 8,
        "type": "ImportSpecifier",
        "view": false,
      },
    ],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 42,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse import-mutable.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 34,
    "factory": false,
    "source": Node {
      "end": 34,
      "raw": "\\"module\\"",
      "start": 26,
      "type": "Literal",
      "value": "module",
    },
    "specifiers": Array [
      Node {
        "end": 19,
        "imported": Node {
          "end": 19,
          "name": "foo",
          "start": 16,
          "type": "Identifier",
        },
        "local": Node {
          "end": 19,
          "name": "foo",
          "start": 16,
          "type": "Identifier",
        },
        "mutable": true,
        "start": 8,
        "type": "ImportSpecifier",
        "view": false,
      },
    ],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 35,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse import-semicolon.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 38,
    "factory": false,
    "source": Node {
      "end": 38,
      "raw": "\\"module\\"",
      "start": 30,
      "type": "Literal",
      "value": "module",
    },
    "specifiers": Array [
      Node {
        "end": 11,
        "imported": Node {
          "end": 11,
          "name": "foo",
          "start": 8,
          "type": "Identifier",
        },
        "local": Node {
          "end": 11,
          "name": "foo",
          "start": 8,
          "type": "Identifier",
        },
        "mutable": false,
        "start": 8,
        "type": "ImportSpecifier",
        "view": false,
      },
      Node {
        "end": 23,
        "imported": Node {
          "end": 16,
          "name": "bar",
          "start": 13,
          "type": "Identifier",
        },
        "local": Node {
          "end": 23,
          "name": "baz",
          "start": 20,
          "type": "Identifier",
        },
        "mutable": false,
        "start": 13,
        "type": "ImportSpecifier",
        "view": false,
      },
    ],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 40,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse import-side-effect.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 7,
      "line": 1,
    },
    "message": "Unexpected token (1:7)",
    "pos": 7,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse import-viewof-as.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 40,
    "factory": false,
    "source": Node {
      "end": 40,
      "raw": "\\"module\\"",
      "start": 32,
      "type": "Literal",
      "value": "module",
    },
    "specifiers": Array [
      Node {
        "end": 25,
        "imported": Node {
          "end": 18,
          "name": "foo",
          "start": 15,
          "type": "Identifier",
        },
        "local": Node {
          "end": 25,
          "name": "bar",
          "start": 22,
          "type": "Identifier",
        },
        "start": 8,
        "type": "ImportSpecifier",
        "view": true,
      },
    ],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 41,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse import-viewof.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 33,
    "factory": false,
    "source": Node {
      "end": 33,
      "raw": "\\"module\\"",
      "start": 25,
      "type": "Literal",
      "value": "module",
    },
    "specifiers": Array [
      Node {
        "end": 18,
        "imported": Node {
          "end": 18,
          "name": "foo",
          "start": 15,
          "type": "Identifier",
        },
        "local": Node {
          "end": 18,
          "name": "foo",
          "start": 15,
          "type": "Identifier",
        },
        "start": 8,
        "type": "ImportSpecifier",
        "view": true,
      },
    ],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 34,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse import-with-as-duplicate.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 28,
      "line": 1,
    },
    "message": "Identifier 'foo' has already been declared (1:28)",
    "pos": 28,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse import-with-default-as.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 26,
      "line": 1,
    },
    "message": "Unexpected keyword 'default' (1:26)",
    "pos": 26,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse import-with-default.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 19,
      "line": 1,
    },
    "message": "Unexpected keyword 'default' (1:19)",
    "pos": 19,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse import-with-duplicate.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 21,
      "line": 1,
    },
    "message": "Identifier 'foo' has already been declared (1:21)",
    "pos": 21,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse import-with-empty.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 34,
    "factory": false,
    "injections": Array [],
    "source": Node {
      "end": 34,
      "raw": "\\"module\\"",
      "start": 26,
      "type": "Literal",
      "value": "module",
    },
    "specifiers": Array [
      Node {
        "end": 11,
        "imported": Node {
          "end": 11,
          "name": "foo",
          "start": 8,
          "type": "Identifier",
        },
        "local": Node {
          "end": 11,
          "name": "foo",
          "start": 8,
          "type": "Identifier",
        },
        "mutable": false,
        "start": 8,
        "type": "ImportSpecifier",
        "view": false,
      },
    ],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 35,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse import-with.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 44,
    "factory": false,
    "injections": Array [
      Node {
        "end": 29,
        "imported": Node {
          "end": 22,
          "name": "bar",
          "start": 19,
          "type": "Identifier",
        },
        "local": Node {
          "end": 29,
          "name": "baz",
          "start": 26,
          "type": "Identifier",
        },
        "mutable": false,
        "start": 19,
        "type": "ImportSpecifier",
        "view": false,
      },
    ],
    "source": Node {
      "end": 44,
      "raw": "\\"module\\"",
      "start": 36,
      "type": "Literal",
      "value": "module",
    },
    "specifiers": Array [
      Node {
        "end": 11,
        "imported": Node {
          "end": 11,
          "name": "foo",
          "start": 8,
          "type": "Identifier",
        },
        "local": Node {
          "end": 11,
          "name": "foo",
          "start": 8,
          "type": "Identifier",
        },
        "mutable": false,
        "start": 8,
        "type": "ImportSpecifier",
        "view": false,
      },
    ],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 45,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse import.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 38,
    "factory": false,
    "source": Node {
      "end": 38,
      "raw": "\\"module\\"",
      "start": 30,
      "type": "Literal",
      "value": "module",
    },
    "specifiers": Array [
      Node {
        "end": 11,
        "imported": Node {
          "end": 11,
          "name": "foo",
          "start": 8,
          "type": "Identifier",
        },
        "local": Node {
          "end": 11,
          "name": "foo",
          "start": 8,
          "type": "Identifier",
        },
        "mutable": false,
        "start": 8,
        "type": "ImportSpecifier",
        "view": false,
      },
      Node {
        "end": 23,
        "imported": Node {
          "end": 16,
          "name": "bar",
          "start": 13,
          "type": "Identifier",
        },
        "local": Node {
          "end": 23,
          "name": "baz",
          "start": 20,
          "type": "Identifier",
        },
        "mutable": false,
        "start": 13,
        "type": "ImportSpecifier",
        "view": false,
      },
    ],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 39,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse leading-semicolon.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 1,
      "line": 1,
    },
    "message": "Unexpected token (1:1)",
    "pos": 1,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse legal-arguments.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": false,
    "body": Node {
      "body": Array [
        Node {
          "argument": Node {
            "computed": false,
            "end": 36,
            "object": Node {
              "end": 29,
              "name": "arguments",
              "start": 20,
              "type": "Identifier",
            },
            "property": Node {
              "end": 36,
              "name": "length",
              "start": 30,
              "type": "Identifier",
            },
            "start": 20,
            "type": "MemberExpression",
          },
          "end": 37,
          "start": 13,
          "type": "ReturnStatement",
        },
      ],
      "end": 39,
      "start": 11,
      "type": "BlockStatement",
    },
    "end": 39,
    "expression": false,
    "generator": false,
    "id": null,
    "params": Array [],
    "start": 0,
    "type": "FunctionExpression",
  },
  "end": 40,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse member-assignment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 14,
    "left": Node {
      "computed": false,
      "end": 10,
      "object": Node {
        "end": 6,
        "name": "window",
        "start": 0,
        "type": "Identifier",
      },
      "property": Node {
        "end": 10,
        "name": "foo",
        "start": 7,
        "type": "Identifier",
      },
      "start": 0,
      "type": "MemberExpression",
    },
    "operator": "=",
    "right": Node {
      "end": 14,
      "raw": "2",
      "start": 13,
      "type": "Literal",
      "value": 2,
    },
    "start": 0,
    "type": "AssignmentExpression",
  },
  "end": 15,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 6,
      "name": "window",
      "start": 0,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse multiple-input-references.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "declarations": Array [
          Node {
            "end": 28,
            "id": Node {
              "end": 20,
              "name": "sum",
              "start": 17,
              "type": "Identifier",
            },
            "init": Node {
              "end": 28,
              "left": Node {
                "end": 24,
                "name": "a",
                "start": 23,
                "type": "Identifier",
              },
              "operator": "+",
              "right": Node {
                "end": 28,
                "name": "b",
                "start": 27,
                "type": "Identifier",
              },
              "start": 23,
              "type": "BinaryExpression",
            },
            "start": 17,
            "type": "VariableDeclarator",
          },
        ],
        "end": 29,
        "kind": "const",
        "start": 11,
        "type": "VariableDeclaration",
      },
      Node {
        "declarations": Array [
          Node {
            "end": 53,
            "id": Node {
              "end": 45,
              "name": "product",
              "start": 38,
              "type": "Identifier",
            },
            "init": Node {
              "end": 53,
              "left": Node {
                "end": 49,
                "name": "a",
                "start": 48,
                "type": "Identifier",
              },
              "operator": "*",
              "right": Node {
                "end": 53,
                "name": "b",
                "start": 52,
                "type": "Identifier",
              },
              "start": 48,
              "type": "BinaryExpression",
            },
            "start": 38,
            "type": "VariableDeclarator",
          },
        ],
        "end": 54,
        "kind": "const",
        "start": 32,
        "type": "VariableDeclaration",
      },
      Node {
        "declarations": Array [
          Node {
            "end": 81,
            "id": Node {
              "end": 73,
              "name": "difference",
              "start": 63,
              "type": "Identifier",
            },
            "init": Node {
              "end": 81,
              "left": Node {
                "end": 77,
                "name": "a",
                "start": 76,
                "type": "Identifier",
              },
              "operator": "-",
              "right": Node {
                "end": 81,
                "name": "b",
                "start": 80,
                "type": "Identifier",
              },
              "start": 76,
              "type": "BinaryExpression",
            },
            "start": 63,
            "type": "VariableDeclarator",
          },
        ],
        "end": 82,
        "kind": "const",
        "start": 57,
        "type": "VariableDeclaration",
      },
      Node {
        "argument": Node {
          "end": 118,
          "properties": Array [
            Node {
              "computed": false,
              "end": 96,
              "key": Node {
                "end": 96,
                "name": "sum",
                "start": 93,
                "type": "Identifier",
              },
              "kind": "init",
              "method": false,
              "shorthand": true,
              "start": 93,
              "type": "Property",
              "value": Node {
                "end": 96,
                "name": "sum",
                "start": 93,
                "type": "Identifier",
              },
            },
            Node {
              "computed": false,
              "end": 105,
              "key": Node {
                "end": 105,
                "name": "product",
                "start": 98,
                "type": "Identifier",
              },
              "kind": "init",
              "method": false,
              "shorthand": true,
              "start": 98,
              "type": "Property",
              "value": Node {
                "end": 105,
                "name": "product",
                "start": 98,
                "type": "Identifier",
              },
            },
            Node {
              "computed": false,
              "end": 117,
              "key": Node {
                "end": 117,
                "name": "difference",
                "start": 107,
                "type": "Identifier",
              },
              "kind": "init",
              "method": false,
              "shorthand": true,
              "start": 107,
              "type": "Property",
              "value": Node {
                "end": 117,
                "name": "difference",
                "start": 107,
                "type": "Identifier",
              },
            },
          ],
          "start": 92,
          "type": "ObjectExpression",
        },
        "end": 119,
        "start": 85,
        "type": "ReturnStatement",
      },
    ],
    "end": 121,
    "start": 7,
    "type": "BlockStatement",
  },
  "end": 122,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 4,
    "name": "cell",
    "start": 0,
    "type": "Identifier",
  },
  "references": Array [
    Node {
      "end": 24,
      "name": "a",
      "start": 23,
      "type": "Identifier",
    },
    Node {
      "end": 28,
      "name": "b",
      "start": 27,
      "type": "Identifier",
    },
    Node {
      "end": 49,
      "name": "a",
      "start": 48,
      "type": "Identifier",
    },
    Node {
      "end": 53,
      "name": "b",
      "start": 52,
      "type": "Identifier",
    },
    Node {
      "end": 77,
      "name": "a",
      "start": 76,
      "type": "Identifier",
    },
    Node {
      "end": 81,
      "name": "b",
      "start": 80,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-argument.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 12,
      "line": 1,
    },
    "message": "Unexpected keyword 'mutable' (1:12)",
    "pos": 12,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse mutable-as-property.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 23,
    "left": Node {
      "computed": true,
      "end": 19,
      "object": Node {
        "end": 6,
        "name": "object",
        "start": 0,
        "type": "Identifier",
      },
      "property": Node {
        "end": 18,
        "id": Node {
          "end": 18,
          "name": "foo",
          "start": 15,
          "type": "Identifier",
        },
        "start": 7,
        "type": "MutableExpression",
      },
      "start": 0,
      "type": "MemberExpression",
    },
    "operator": "+",
    "right": Node {
      "end": 23,
      "raw": "1",
      "start": 22,
      "type": "Literal",
      "value": 1,
    },
    "start": 0,
    "type": "BinaryExpression",
  },
  "end": 24,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 6,
      "name": "object",
      "start": 0,
      "type": "Identifier",
    },
    Node {
      "end": 18,
      "id": Node {
        "end": 18,
        "name": "foo",
        "start": 15,
        "type": "Identifier",
      },
      "start": 7,
      "type": "MutableExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-assign-default.js > must match snapshot 1`] = `
Node {
  "async": true,
  "body": Node {
    "argument": Node {
      "arguments": Array [
        Node {
          "end": 42,
          "name": "config",
          "start": 36,
          "type": "Identifier",
        },
      ],
      "callee": Node {
        "computed": false,
        "end": 35,
        "object": Node {
          "end": 29,
          "name": "Service",
          "start": 22,
          "type": "Identifier",
        },
        "property": Node {
          "end": 35,
          "name": "fetch",
          "start": 30,
          "type": "Identifier",
        },
        "start": 22,
        "type": "MemberExpression",
      },
      "end": 43,
      "start": 22,
      "type": "CallExpression",
    },
    "end": 43,
    "start": 16,
    "type": "AwaitExpression",
  },
  "end": 44,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 13,
    "id": Node {
      "end": 13,
      "name": "state",
      "start": 8,
      "type": "Identifier",
    },
    "start": 0,
    "type": "MutableExpression",
  },
  "references": Array [
    Node {
      "end": 29,
      "name": "Service",
      "start": 22,
      "type": "Identifier",
    },
    Node {
      "end": 42,
      "name": "config",
      "start": 36,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-assignment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "end": 24,
        "expression": Node {
          "end": 23,
          "left": Node {
            "end": 17,
            "id": Node {
              "end": 17,
              "name": "value",
              "start": 12,
              "type": "Identifier",
            },
            "start": 4,
            "type": "MutableExpression",
          },
          "operator": "=",
          "right": Node {
            "end": 23,
            "raw": "101",
            "start": 20,
            "type": "Literal",
            "value": 101,
          },
          "start": 4,
          "type": "AssignmentExpression",
        },
        "start": 4,
        "type": "ExpressionStatement",
      },
    ],
    "end": 26,
    "start": 0,
    "type": "BlockStatement",
  },
  "end": 27,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 17,
      "id": Node {
        "end": 17,
        "name": "value",
        "start": 12,
        "type": "Identifier",
      },
      "start": 4,
      "type": "MutableExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-block-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "argument": Node {
          "end": 37,
          "properties": Array [
            Node {
              "computed": false,
              "end": 30,
              "key": Node {
                "end": 27,
                "name": "x",
                "start": 26,
                "type": "Identifier",
              },
              "kind": "init",
              "method": false,
              "shorthand": false,
              "start": 26,
              "type": "Property",
              "value": Node {
                "end": 30,
                "raw": "0",
                "start": 29,
                "type": "Literal",
                "value": 0,
              },
            },
            Node {
              "computed": false,
              "end": 36,
              "key": Node {
                "end": 33,
                "name": "y",
                "start": 32,
                "type": "Identifier",
              },
              "kind": "init",
              "method": false,
              "shorthand": false,
              "start": 32,
              "type": "Property",
              "value": Node {
                "end": 36,
                "raw": "0",
                "start": 35,
                "type": "Literal",
                "value": 0,
              },
            },
          ],
          "start": 25,
          "type": "ObjectExpression",
        },
        "end": 38,
        "start": 18,
        "type": "ReturnStatement",
      },
    ],
    "end": 40,
    "start": 14,
    "type": "BlockStatement",
  },
  "end": 41,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 11,
    "id": Node {
      "end": 11,
      "name": "foo",
      "start": 8,
      "type": "Identifier",
    },
    "start": 0,
    "type": "MutableExpression",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-constant.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 8,
      "line": 1,
    },
    "message": "Unexpected token (1:8)",
    "pos": 8,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse mutable-default-value.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": false,
    "body": Node {
      "body": Array [
        Node {
          "argument": Node {
            "end": 39,
            "name": "y",
            "start": 38,
            "type": "Identifier",
          },
          "end": 40,
          "start": 31,
          "type": "ReturnStatement",
        },
      ],
      "end": 42,
      "start": 27,
      "type": "BlockStatement",
    },
    "end": 42,
    "expression": false,
    "generator": false,
    "id": Node {
      "end": 11,
      "name": "fn",
      "start": 9,
      "type": "Identifier",
    },
    "params": Array [
      Node {
        "end": 25,
        "left": Node {
          "end": 13,
          "name": "y",
          "start": 12,
          "type": "Identifier",
        },
        "right": Node {
          "end": 25,
          "id": Node {
            "end": 25,
            "name": "x",
            "start": 24,
            "type": "Identifier",
          },
          "start": 16,
          "type": "MutableExpression",
        },
        "start": 12,
        "type": "AssignmentPattern",
      },
    ],
    "start": 0,
    "type": "FunctionExpression",
  },
  "end": 43,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 11,
    "name": "fn",
    "start": 9,
    "type": "Identifier",
  },
  "references": Array [
    Node {
      "end": 25,
      "id": Node {
        "end": 25,
        "name": "x",
        "start": 24,
        "type": "Identifier",
      },
      "start": 16,
      "type": "MutableExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-destructure-array.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 19,
    "left": Node {
      "elements": Array [
        Node {
          "end": 11,
          "id": Node {
            "end": 11,
            "name": "x",
            "start": 10,
            "type": "Identifier",
          },
          "start": 2,
          "type": "MutableExpression",
        },
      ],
      "end": 12,
      "start": 1,
      "type": "ArrayPattern",
    },
    "operator": "=",
    "right": Node {
      "elements": Array [
        Node {
          "end": 18,
          "raw": "42",
          "start": 16,
          "type": "Literal",
          "value": 42,
        },
      ],
      "end": 19,
      "start": 15,
      "type": "ArrayExpression",
    },
    "start": 1,
    "type": "AssignmentExpression",
  },
  "end": 21,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 11,
      "id": Node {
        "end": 11,
        "name": "x",
        "start": 10,
        "type": "Identifier",
      },
      "start": 2,
      "type": "MutableExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-destructure-object.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 42,
    "left": Node {
      "end": 22,
      "properties": Array [
        Node {
          "computed": false,
          "end": 21,
          "key": Node {
            "end": 10,
            "name": "property",
            "start": 2,
            "type": "Identifier",
          },
          "kind": "init",
          "method": false,
          "shorthand": false,
          "start": 2,
          "type": "Property",
          "value": Node {
            "end": 21,
            "id": Node {
              "end": 21,
              "name": "x",
              "start": 20,
              "type": "Identifier",
            },
            "start": 12,
            "type": "MutableExpression",
          },
        },
      ],
      "start": 1,
      "type": "ObjectPattern",
    },
    "operator": "=",
    "right": Node {
      "end": 42,
      "properties": Array [
        Node {
          "computed": false,
          "end": 41,
          "key": Node {
            "end": 34,
            "name": "property",
            "start": 26,
            "type": "Identifier",
          },
          "kind": "init",
          "method": false,
          "shorthand": false,
          "start": 26,
          "type": "Property",
          "value": Node {
            "end": 41,
            "name": "value",
            "start": 36,
            "type": "Identifier",
          },
        },
      ],
      "start": 25,
      "type": "ObjectExpression",
    },
    "start": 1,
    "type": "AssignmentExpression",
  },
  "end": 44,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 21,
      "id": Node {
        "end": 21,
        "name": "x",
        "start": 20,
        "type": "Identifier",
      },
      "start": 12,
      "type": "MutableExpression",
    },
    Node {
      "end": 41,
      "name": "value",
      "start": 36,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-destructure-property.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 2,
      "line": 1,
    },
    "message": "Unexpected keyword 'mutable' (1:2)",
    "pos": 2,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse mutable-internal-comment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 27,
    "id": Node {
      "end": 27,
      "name": "value",
      "start": 22,
      "type": "Identifier",
    },
    "start": 0,
    "type": "MutableExpression",
  },
  "end": 28,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 27,
      "id": Node {
        "end": 27,
        "name": "value",
        "start": 22,
        "type": "Identifier",
      },
      "start": 0,
      "type": "MutableExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-member.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 15,
      "line": 1,
    },
    "message": "Unexpected token (1:15)",
    "pos": 15,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse mutable-reference.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "computed": false,
    "end": 22,
    "object": Node {
      "end": 13,
      "id": Node {
        "end": 13,
        "name": "value",
        "start": 8,
        "type": "Identifier",
      },
      "start": 0,
      "type": "MutableExpression",
    },
    "property": Node {
      "end": 22,
      "name": "property",
      "start": 14,
      "type": "Identifier",
    },
    "start": 0,
    "type": "MemberExpression",
  },
  "end": 23,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 13,
      "id": Node {
        "end": 13,
        "name": "value",
        "start": 8,
        "type": "Identifier",
      },
      "start": 0,
      "type": "MutableExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-var.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 6,
      "line": 2,
    },
    "message": "Unexpected keyword 'mutable' (2:6)",
    "pos": 8,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse named-async-function.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": true,
    "body": Node {
      "body": Array [
        Node {
          "end": 37,
          "expression": Node {
            "argument": Node {
              "end": 36,
              "name": "promise",
              "start": 29,
              "type": "Identifier",
            },
            "end": 36,
            "start": 23,
            "type": "AwaitExpression",
          },
          "start": 23,
          "type": "ExpressionStatement",
        },
      ],
      "end": 39,
      "start": 21,
      "type": "BlockStatement",
    },
    "end": 39,
    "expression": false,
    "generator": false,
    "id": Node {
      "end": 18,
      "name": "foo",
      "start": 15,
      "type": "Identifier",
    },
    "params": Array [],
    "start": 0,
    "type": "FunctionExpression",
  },
  "end": 40,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 18,
    "name": "foo",
    "start": 15,
    "type": "Identifier",
  },
  "references": Array [
    Node {
      "end": 36,
      "name": "promise",
      "start": 29,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse named-block-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "argument": Node {
          "end": 19,
          "raw": "42",
          "start": 17,
          "type": "Literal",
          "value": 42,
        },
        "end": 20,
        "start": 10,
        "type": "ReturnStatement",
      },
    ],
    "end": 22,
    "start": 6,
    "type": "BlockStatement",
  },
  "end": 23,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 3,
    "name": "foo",
    "start": 0,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse named-class.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Node {
      "body": Array [],
      "end": 12,
      "start": 10,
      "type": "ClassBody",
    },
    "end": 12,
    "id": Node {
      "end": 9,
      "name": "Foo",
      "start": 6,
      "type": "Identifier",
    },
    "start": 0,
    "superClass": null,
    "type": "ClassExpression",
  },
  "end": 13,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 9,
    "name": "Foo",
    "start": 6,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse named-empty.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 0,
      "line": 2,
    },
    "message": "Unexpected end of input (2:0)",
    "pos": 6,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse named-expression-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 8,
    "raw": "42",
    "start": 6,
    "type": "Literal",
    "value": 42,
  },
  "end": 9,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 3,
    "name": "foo",
    "start": 0,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse named-function-in-named-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": false,
    "body": Node {
      "body": Array [
        Node {
          "argument": Node {
            "end": 32,
            "raw": "42",
            "start": 30,
            "type": "Literal",
            "value": 42,
          },
          "end": 33,
          "start": 23,
          "type": "ReturnStatement",
        },
      ],
      "end": 35,
      "start": 21,
      "type": "BlockStatement",
    },
    "end": 35,
    "expression": false,
    "generator": false,
    "id": Node {
      "end": 18,
      "name": "bar",
      "start": 15,
      "type": "Identifier",
    },
    "params": Array [],
    "start": 6,
    "type": "FunctionExpression",
  },
  "end": 36,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 3,
    "name": "foo",
    "start": 0,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse named-function.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": false,
    "body": Node {
      "body": Array [
        Node {
          "argument": Node {
            "end": 26,
            "raw": "42",
            "start": 24,
            "type": "Literal",
            "value": 42,
          },
          "end": 27,
          "start": 17,
          "type": "ReturnStatement",
        },
      ],
      "end": 29,
      "start": 15,
      "type": "BlockStatement",
    },
    "end": 29,
    "expression": false,
    "generator": false,
    "id": Node {
      "end": 12,
      "name": "foo",
      "start": 9,
      "type": "Identifier",
    },
    "params": Array [],
    "start": 0,
    "type": "FunctionExpression",
  },
  "end": 30,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 12,
    "name": "foo",
    "start": 9,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse named-generator-function.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": false,
    "body": Node {
      "body": Array [
        Node {
          "end": 27,
          "expression": Node {
            "argument": Node {
              "end": 26,
              "raw": "42",
              "start": 24,
              "type": "Literal",
              "value": 42,
            },
            "delegate": false,
            "end": 26,
            "start": 18,
            "type": "YieldExpression",
          },
          "start": 18,
          "type": "ExpressionStatement",
        },
      ],
      "end": 29,
      "start": 16,
      "type": "BlockStatement",
    },
    "end": 29,
    "expression": false,
    "generator": true,
    "id": Node {
      "end": 13,
      "name": "foo",
      "start": 10,
      "type": "Identifier",
    },
    "params": Array [],
    "start": 0,
    "type": "FunctionExpression",
  },
  "end": 30,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 13,
    "name": "foo",
    "start": 10,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse object-literal.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 10,
    "properties": Array [
      Node {
        "computed": false,
        "end": 9,
        "key": Node {
          "end": 5,
          "name": "foo",
          "start": 2,
          "type": "Identifier",
        },
        "kind": "init",
        "method": false,
        "shorthand": false,
        "start": 2,
        "type": "Property",
        "value": Node {
          "end": 9,
          "raw": "42",
          "start": 7,
          "type": "Literal",
          "value": 42,
        },
      },
    ],
    "start": 1,
    "type": "ObjectExpression",
  },
  "end": 12,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse semicolon.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": null,
  "end": 2,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse sequence-expression.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 7,
    "expressions": Array [
      Node {
        "end": 1,
        "raw": "1",
        "start": 0,
        "type": "Literal",
        "value": 1,
      },
      Node {
        "end": 4,
        "raw": "2",
        "start": 3,
        "type": "Literal",
        "value": 2,
      },
      Node {
        "end": 7,
        "raw": "3",
        "start": 6,
        "type": "Literal",
        "value": 3,
      },
    ],
    "start": 0,
    "type": "SequenceExpression",
  },
  "end": 8,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse shadowed-view.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "declarations": Array [
          Node {
            "end": 13,
            "id": Node {
              "end": 9,
              "name": "x",
              "start": 8,
              "type": "Identifier",
            },
            "init": Node {
              "end": 13,
              "raw": "2",
              "start": 12,
              "type": "Literal",
              "value": 2,
            },
            "start": 8,
            "type": "VariableDeclarator",
          },
        ],
        "end": 14,
        "kind": "let",
        "start": 4,
        "type": "VariableDeclaration",
      },
      Node {
        "end": 23,
        "expression": Node {
          "end": 22,
          "left": Node {
            "end": 18,
            "name": "x",
            "start": 17,
            "type": "Identifier",
          },
          "operator": "=",
          "right": Node {
            "end": 22,
            "raw": "4",
            "start": 21,
            "type": "Literal",
            "value": 4,
          },
          "start": 17,
          "type": "AssignmentExpression",
        },
        "start": 17,
        "type": "ExpressionStatement",
      },
      Node {
        "argument": Node {
          "end": 41,
          "id": Node {
            "end": 41,
            "name": "x",
            "start": 40,
            "type": "Identifier",
          },
          "start": 33,
          "type": "ViewExpression",
        },
        "end": 42,
        "start": 26,
        "type": "ReturnStatement",
      },
    ],
    "end": 44,
    "start": 0,
    "type": "BlockStatement",
  },
  "end": 45,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 41,
      "id": Node {
        "end": 41,
        "name": "x",
        "start": 40,
        "type": "Identifier",
      },
      "start": 33,
      "type": "ViewExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse simple-identifier.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 3,
    "name": "foo",
    "start": 0,
    "type": "Identifier",
  },
  "end": 4,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 3,
      "name": "foo",
      "start": 0,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse spread-element.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": false,
    "body": Node {
      "end": 22,
      "name": "bar",
      "start": 19,
      "type": "Identifier",
    },
    "end": 22,
    "expression": true,
    "generator": false,
    "id": null,
    "params": Array [
      Node {
        "end": 14,
        "properties": Array [
          Node {
            "computed": false,
            "end": 5,
            "key": Node {
              "end": 5,
              "name": "foo",
              "start": 2,
              "type": "Identifier",
            },
            "kind": "init",
            "method": false,
            "shorthand": true,
            "start": 2,
            "type": "Property",
            "value": Node {
              "end": 5,
              "name": "foo",
              "start": 2,
              "type": "Identifier",
            },
          },
          Node {
            "argument": Node {
              "end": 13,
              "name": "bar",
              "start": 10,
              "type": "Identifier",
            },
            "end": 13,
            "start": 7,
            "type": "RestElement",
          },
        ],
        "start": 1,
        "type": "ObjectPattern",
      },
    ],
    "start": 0,
    "type": "ArrowFunctionExpression",
  },
  "end": 23,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse template-literal-semicolon.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 11,
    "quasi": Node {
      "end": 11,
      "expressions": Array [],
      "quasis": Array [
        Node {
          "end": 10,
          "start": 5,
          "tail": true,
          "type": "TemplateElement",
          "value": Object {
            "cooked": "hello",
            "raw": "hello",
          },
        },
      ],
      "start": 4,
      "type": "TemplateLiteral",
    },
    "start": 0,
    "tag": Node {
      "end": 4,
      "name": "html",
      "start": 0,
      "type": "Identifier",
    },
    "type": "TaggedTemplateExpression",
  },
  "end": 13,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 4,
      "name": "html",
      "start": 0,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse this-as-name.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 0,
      "line": 1,
    },
    "message": "Assigning to rvalue (1:0)",
    "pos": 0,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse this.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 4,
    "start": 0,
    "type": "ThisExpression",
  },
  "end": 5,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse var-statement.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 0,
      "line": 1,
    },
    "message": "Unexpected token (1:0)",
    "pos": 0,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse viewof-argument.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 13,
      "line": 1,
    },
    "message": "Unexpected keyword 'viewof' (1:13)",
    "pos": 13,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse viewof-assignment.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 2,
      "line": 2,
    },
    "message": "Assigning to rvalue (2:2)",
    "pos": 4,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse viewof-binding.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 6,
      "line": 2,
    },
    "message": "Unexpected keyword 'viewof' (2:6)",
    "pos": 8,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse viewof-block-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "argument": Node {
          "arguments": Array [],
          "callee": Node {
            "computed": false,
            "end": 33,
            "object": Node {
              "end": 27,
              "name": "DOM",
              "start": 24,
              "type": "Identifier",
            },
            "property": Node {
              "end": 33,
              "name": "input",
              "start": 28,
              "type": "Identifier",
            },
            "start": 24,
            "type": "MemberExpression",
          },
          "end": 35,
          "start": 24,
          "type": "CallExpression",
        },
        "end": 36,
        "start": 17,
        "type": "ReturnStatement",
      },
    ],
    "end": 38,
    "start": 13,
    "type": "BlockStatement",
  },
  "end": 39,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 10,
    "id": Node {
      "end": 10,
      "name": "foo",
      "start": 7,
      "type": "Identifier",
    },
    "start": 0,
    "type": "ViewExpression",
  },
  "references": Array [
    Node {
      "end": 27,
      "name": "DOM",
      "start": 24,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse viewof-expression-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "arguments": Array [],
    "callee": Node {
      "computed": false,
      "end": 22,
      "object": Node {
        "end": 16,
        "name": "DOM",
        "start": 13,
        "type": "Identifier",
      },
      "property": Node {
        "end": 22,
        "name": "input",
        "start": 17,
        "type": "Identifier",
      },
      "start": 13,
      "type": "MemberExpression",
    },
    "end": 24,
    "start": 13,
    "type": "CallExpression",
  },
  "end": 25,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 10,
    "id": Node {
      "end": 10,
      "name": "foo",
      "start": 7,
      "type": "Identifier",
    },
    "start": 0,
    "type": "ViewExpression",
  },
  "references": Array [
    Node {
      "end": 16,
      "name": "DOM",
      "start": 13,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse viewof-internal-comment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "arguments": Array [],
    "callee": Node {
      "computed": false,
      "end": 36,
      "object": Node {
        "end": 30,
        "name": "DOM",
        "start": 27,
        "type": "Identifier",
      },
      "property": Node {
        "end": 36,
        "name": "range",
        "start": 31,
        "type": "Identifier",
      },
      "start": 27,
      "type": "MemberExpression",
    },
    "end": 38,
    "start": 27,
    "type": "CallExpression",
  },
  "end": 39,
  "fileAttachments": Map {},
  "generator": false,
  "id": Node {
    "end": 24,
    "id": Node {
      "end": 24,
      "name": "bar",
      "start": 21,
      "type": "Identifier",
    },
    "start": 0,
    "type": "ViewExpression",
  },
  "references": Array [
    Node {
      "end": 30,
      "name": "DOM",
      "start": 27,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse viewof-let.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 6,
      "line": 2,
    },
    "message": "Unexpected keyword 'viewof' (2:6)",
    "pos": 8,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse viewof-member-expression.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "computed": false,
    "end": 15,
    "object": Node {
      "end": 10,
      "id": Node {
        "end": 10,
        "name": "foo",
        "start": 7,
        "type": "Identifier",
      },
      "start": 0,
      "type": "ViewExpression",
    },
    "property": Node {
      "end": 15,
      "name": "name",
      "start": 11,
      "type": "Identifier",
    },
    "start": 0,
    "type": "MemberExpression",
  },
  "end": 16,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 10,
      "id": Node {
        "end": 10,
        "name": "foo",
        "start": 7,
        "type": "Identifier",
      },
      "start": 0,
      "type": "ViewExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse viewof-member.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 14,
      "line": 1,
    },
    "message": "Unexpected token (1:14)",
    "pos": 14,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse viewof-orphan.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 7,
      "line": 1,
    },
    "message": "Unexpected token (1:7)",
    "pos": 7,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse viewof-property.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 22,
    "left": Node {
      "computed": true,
      "end": 18,
      "object": Node {
        "end": 6,
        "name": "object",
        "start": 0,
        "type": "Identifier",
      },
      "property": Node {
        "end": 17,
        "id": Node {
          "end": 17,
          "name": "foo",
          "start": 14,
          "type": "Identifier",
        },
        "start": 7,
        "type": "ViewExpression",
      },
      "start": 0,
      "type": "MemberExpression",
    },
    "operator": "+",
    "right": Node {
      "end": 22,
      "raw": "2",
      "start": 21,
      "type": "Literal",
      "value": 2,
    },
    "start": 0,
    "type": "BinaryExpression",
  },
  "end": 23,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 6,
      "name": "object",
      "start": 0,
      "type": "Identifier",
    },
    Node {
      "end": 17,
      "id": Node {
        "end": 17,
        "name": "foo",
        "start": 14,
        "type": "Identifier",
      },
      "start": 7,
      "type": "ViewExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse viewof-reference-internal-comment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 24,
    "id": Node {
      "end": 24,
      "name": "bar",
      "start": 21,
      "type": "Identifier",
    },
    "start": 0,
    "type": "ViewExpression",
  },
  "end": 25,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 24,
      "id": Node {
        "end": 24,
        "name": "bar",
        "start": 21,
        "type": "Identifier",
      },
      "start": 0,
      "type": "ViewExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse viewof-reference.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "computed": false,
    "end": 20,
    "object": Node {
      "end": 12,
      "id": Node {
        "end": 12,
        "name": "input",
        "start": 7,
        "type": "Identifier",
      },
      "start": 0,
      "type": "ViewExpression",
    },
    "property": Node {
      "end": 20,
      "name": "tagName",
      "start": 13,
      "type": "Identifier",
    },
    "start": 0,
    "type": "MemberExpression",
  },
  "end": 21,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 12,
      "id": Node {
        "end": 12,
        "name": "input",
        "start": 7,
        "type": "Identifier",
      },
      "start": 0,
      "type": "ViewExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse yield-await.js > must match snapshot 1`] = `
Node {
  "async": true,
  "body": Node {
    "body": Array [
      Node {
        "end": 16,
        "expression": Node {
          "argument": Node {
            "end": 15,
            "name": "value",
            "start": 10,
            "type": "Identifier",
          },
          "delegate": false,
          "end": 15,
          "start": 4,
          "type": "YieldExpression",
        },
        "start": 4,
        "type": "ExpressionStatement",
      },
      Node {
        "end": 33,
        "expression": Node {
          "argument": Node {
            "end": 32,
            "name": "promise",
            "start": 25,
            "type": "Identifier",
          },
          "end": 32,
          "start": 19,
          "type": "AwaitExpression",
        },
        "start": 19,
        "type": "ExpressionStatement",
      },
    ],
    "end": 35,
    "start": 0,
    "type": "BlockStatement",
  },
  "end": 36,
  "fileAttachments": Map {},
  "generator": true,
  "id": null,
  "references": Array [
    Node {
      "end": 15,
      "name": "value",
      "start": 10,
      "type": "Identifier",
    },
    Node {
      "end": 32,
      "name": "promise",
      "start": 25,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse yield-block-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "end": 16,
        "expression": Node {
          "argument": Node {
            "end": 15,
            "name": "value",
            "start": 10,
            "type": "Identifier",
          },
          "delegate": false,
          "end": 15,
          "start": 4,
          "type": "YieldExpression",
        },
        "start": 4,
        "type": "ExpressionStatement",
      },
    ],
    "end": 18,
    "start": 0,
    "type": "BlockStatement",
  },
  "end": 19,
  "fileAttachments": Map {},
  "generator": true,
  "id": null,
  "references": Array [
    Node {
      "end": 15,
      "name": "value",
      "start": 10,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse yield-expression-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "argument": Node {
      "end": 11,
      "name": "value",
      "start": 6,
      "type": "Identifier",
    },
    "delegate": false,
    "end": 11,
    "start": 0,
    "type": "YieldExpression",
  },
  "end": 12,
  "fileAttachments": Map {},
  "generator": true,
  "id": null,
  "references": Array [
    Node {
      "end": 11,
      "name": "value",
      "start": 6,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse yield-in-function.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "async": false,
        "body": Node {
          "body": Array [
            Node {
              "end": 40,
              "expression": Node {
                "argument": Node {
                  "end": 39,
                  "name": "value",
                  "start": 34,
                  "type": "Identifier",
                },
                "delegate": false,
                "end": 39,
                "start": 28,
                "type": "YieldExpression",
              },
              "start": 28,
              "type": "ExpressionStatement",
            },
          ],
          "end": 44,
          "start": 22,
          "type": "BlockStatement",
        },
        "end": 44,
        "expression": false,
        "generator": true,
        "id": Node {
          "end": 19,
          "name": "inner",
          "start": 14,
          "type": "Identifier",
        },
        "params": Array [],
        "start": 4,
        "type": "FunctionDeclaration",
      },
    ],
    "end": 46,
    "start": 0,
    "type": "BlockStatement",
  },
  "end": 47,
  "fileAttachments": Map {},
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 39,
      "name": "value",
      "start": 34,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse yield-star-expression-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "argument": Node {
      "end": 13,
      "name": "values",
      "start": 7,
      "type": "Identifier",
    },
    "delegate": true,
    "end": 13,
    "start": 0,
    "type": "YieldExpression",
  },
  "end": 14,
  "fileAttachments": Map {},
  "generator": true,
  "id": null,
  "references": Array [
    Node {
      "end": 13,
      "name": "values",
      "start": 7,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parseModule > must match snapshot 1`] = `
Node {
  "cells": Array [
    Node {
      "async": false,
      "body": Node {
        "end": 5,
        "raw": "1",
        "start": 4,
        "type": "Literal",
        "value": 1,
      },
      "end": 6,
      "fileAttachments": Map {},
      "generator": false,
      "id": Node {
        "end": 1,
        "name": "a",
        "start": 0,
        "type": "Identifier",
      },
      "input": "a = 1;\\n\\nb = 2;\\n\\nc = a + b",
      "references": Array [],
      "start": 0,
      "type": "Cell",
    },
    Node {
      "async": false,
      "body": Node {
        "end": 13,
        "raw": "2",
        "start": 12,
        "type": "Literal",
        "value": 2,
      },
      "end": 14,
      "fileAttachments": Map {},
      "generator": false,
      "id": Node {
        "end": 9,
        "name": "b",
        "start": 8,
        "type": "Identifier",
      },
      "input": "a = 1;\\n\\nb = 2;\\n\\nc = a + b",
      "references": Array [],
      "start": 8,
      "type": "Cell",
    },
    Node {
      "async": false,
      "body": Node {
        "end": 25,
        "left": Node {
          "end": 21,
          "name": "a",
          "start": 20,
          "type": "Identifier",
        },
        "operator": "+",
        "right": Node {
          "end": 25,
          "name": "b",
          "start": 24,
          "type": "Identifier",
        },
        "start": 20,
        "type": "BinaryExpression",
      },
      "end": 25,
      "fileAttachments": Map {},
      "generator": false,
      "id": Node {
        "end": 17,
        "name": "c",
        "start": 16,
        "type": "Identifier",
      },
      "input": "a = 1;\\n\\nb = 2;\\n\\nc = a + b",
      "references": Array [
        Node {
          "end": 21,
          "name": "a",
          "start": 20,
          "type": "Identifier",
        },
        Node {
          "end": 25,
          "name": "b",
          "start": 24,
          "type": "Identifier",
        },
      ],
      "start": 16,
      "type": "Cell",
    },
  ],
  "end": 25,
  "start": 0,
  "type": "Program",
}
`
