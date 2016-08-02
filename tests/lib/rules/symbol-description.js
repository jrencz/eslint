/**
 * @fileoverview Tests for symbol-description rule.
 * @author Jarek Rencz
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/symbol-description");
const RuleTester = require("../../../lib/testers/rule-tester");

const ruleTester = new RuleTester();

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
