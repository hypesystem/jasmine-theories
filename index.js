const theorizeIt = require("./lib/theorizeIt.js");

const index = {
    it: theorizeIt("it"),
    xit: theorizeIt("xit"),
};

index.default = index;

module.exports = index;
