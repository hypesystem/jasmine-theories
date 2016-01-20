var util = require("util");

function theoreticallyIt(description, args, testFunction) {
    if(!it) {
        throw new ReferenceError("Global variable `it` was NOT found, but is required by jasmine-theories (must be run inside a spec file run by jasmine).");
    }
    if(!Array.isArray(args)) {
        throw new Error("args passed to jasmine-theories MUST be an array (was " + typeof args + ")");
    }
    if(args.length < 1) {
        throw new Error("args passed to jasmine-theories MUST contain AT LEAST one element (was given " + args + ")");
    }
    args.forEach(function(arg) {
        it(util.format(description, arg), testFunction.bind(this, arg));
    });
}

module.exports = theoreticallyIt;
