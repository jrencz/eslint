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
            code: "var foo = \"foo\"; Symbol(foo);",
            env: {es6: true}
        },
    ],

    invalid: [
        {
            code: "Symbol();",
            errors: [{
                message: "Expected Symbol to have a description.",
                type: "CallExpression"
            }],
            env: {es6: true}
        },
    ]
});
