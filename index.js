const runItForEachArg = require("./lib/runItForEachArg.js");

var exports = {
    it: (description, args, testFunction) => runItForEachArg(it, description, args, testFunction),
    xit: (description, args, testFunction) => runItForEachArg(xit, description, args, testFunction),
    default: exports,
};

module.exports = exports;
