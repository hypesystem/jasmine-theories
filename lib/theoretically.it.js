var util = require("util");

function theoreticallyIt(description, args, testFunction) {
    if(!it) {
        throw new ReferenceError("Global variable `it` was NOT found, but is required by jasmine-theories (must be run inside a spec file run by jasmine).");
    }
    args.forEach(function(arg) {
        it(util.format(description, arg), testFunction.bind(this, arg));
    });
}

module.exports = theoreticallyIt;
