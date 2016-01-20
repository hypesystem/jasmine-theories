var util = require("util");

function theoreticallyIt(description, args, testFunction) {
    args.forEach(function(arg) {
        it(util.format(description, arg), testFunction.bind(this, arg));
    });
}

module.exports = theoreticallyIt;
