var runItForEachArg = require("./runItForEachArg.js");

function theoreticallyIt(description, args, testFunction) {
    runItForEachArg(it, description, args, testFunction);
}

module.exports = theoreticallyIt;
