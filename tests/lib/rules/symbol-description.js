/**
 * @fileoverview Tests for symbol-description rule.
 * @author Jarek Rencz
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

let rule = require("../../../lib/rules/symbol-description"),
    RuleTester = require("../../../lib/testers/rule-tester");

let ruleTester = new RuleTester();

ruleTester.run("symbol-description", rule, {

    valid: [
        {
            code: "Symbol(\"Foo\");",
            env: {es6: true}
        },
        {
            code: "Symbol(\"Foo\");",
            options: ["always"],
            env: {es6: true}
        },
        {
            code: "var foo = \"Foo\"; Symbol(foo);",
            options: ["always"],
            env: {es6: true}
        },
        {
            code: "Symbol();",
            options: ["never"],
            env: {es6: true}
        },
    ],

    invalid: [
        {
            code: "Symbol();",
            errors: [{
                message: "Symbols are supposed to have a description.",
                type: "CallExpression"
            }],
            env: {es6: true}
        },
        {
            code: "Symbol();",
            options: ["always"],
            errors: [{
                message: "Symbols are supposed to have a description.",
                type: "CallExpression"
            }],
            env: {es6: true}
        },
        {
            code: "Symbol(\"Foo\");",
            options: ["never"],
            errors: [{
                message: "Symbols are not allowed to have description.",
                type: "CallExpression"
            }],
            env: {es6: true}
        },
        {
            code: "var foo = \"Foo\"; Symbol(foo);",
            options: ["never"],
            errors: [{
                message: "Symbols are not allowed to have description.",
                type: "CallExpression"
            }],
            env: {es6: true}
        },
    ]
});
