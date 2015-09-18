
/**
 * The functions for when a user wants to generate
 *  a Functional Specification document
 *
 * AUTHOR:  Peter Walker
 * DATE:    16 September 2015
 */

define(
    //The name of this module
    "DocGen/FunctionalSpec",

    //The array of dependencies
    ["dialogs/Dialogs", "utils/ExtensionUtils"],

    //The function to execute when all dependencies have loaded.
    function (require, exports, module) {
        "use strict";

        //Importing the StarUML global modules that we want to use
        var Dialogs = app.getModule("dialogs/Dialogs");

        function test_alert() {
            Dialogs.showAlertDialog("Hello, world!");
        }

        //This exports the functions we've defined so that other scripts
        // can use them when executing
        exports.test_alert = test_alert;
    }
);
