/**
 * @fileoverview Rule to disallow or enforce description with the `Symbol`
 * object
 * @author Jarek Rencz
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

let astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

let MODE_ALWAYS = "always";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------


module.exports = {
    meta: {
        docs: {
            description: "Enforce description with the `Symbol` object",
            category: "ECMAScript 6",
            recommended: false
        },

        schema: [
            {
                enum: [
                    MODE_ALWAYS,
                ]
            }
        ]
    },

    create: function(context) {
        const mode = context.options[0];

        /**
         * Reports if node does not conform the rule in case rule is set to
         * report missing description
         *
         * @param {ASTNode} node - A CallExpression node to check.
         * @returns {void}
         */
        function reportIfDescriptionIsMissing(node) {
            if (node.arguments.length === 0) {
                context.report({
                    node: node,
                    message: "Expected Symbol to have a description."
                });
            }
        }

        /**
         * Checks if node conforms with different settings.
         *
         * @param {ASTNode} node - A CallExpression node to check.
         * @returns {void}
         */
        function checkArgument(node) {
            switch (mode) {
                case MODE_ALWAYS:
                    reportIfDescriptionIsMissing(node);
                    break;
                default:
                    reportIfDescriptionIsMissing(node);
            }
        }

        return {
            "Program:exit": () => {
                let scope = context.getScope();
                let variable = astUtils.getVariableByName(scope, "Symbol");

                if (variable && variable.defs.length === 0) {
                    variable.references.forEach(function(reference) {
                        let node = reference.identifier;

                        if (astUtils.isCallee(node)) {
                            checkArgument(node.parent);
                        }
                    });
                }
            }
        };

    }
};
