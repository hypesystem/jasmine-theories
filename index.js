const theorizeIt = require("./lib/theorizeIt.js");

var exports = {
    it: theorizeIt(it),
    xit: theorizeIt(xit),
    default: exports,
};

module.exports = exports;
