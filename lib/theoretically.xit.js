var runItForEachArg = require("./runItForEachArg.js");

function pendingTheoreticallyIt(description, args, testFunction) {
    runItForEachArg(xit, description, args, testFunction);
}

module.exports = pendingTheoreticallyIt;
