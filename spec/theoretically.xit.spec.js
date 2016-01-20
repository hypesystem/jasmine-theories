var _ = require("lodash");
var theoretically = require("../index.js");

describe("A pending theory", function() {
    var oldXit;

    beforeEach(function() {
        oldXit = xit;
    });

    afterEach(function() {
        xit = oldXit;
    });

    it("runs `it` with each value in the value array and a formatted message", function() {
        xit = jasmine.createSpy("xit");

        var handler = jasmine.createSpy("handler");
        theoretically.xit("might run a test with %s as the value", [ "x", "y", "z" ], handler);

        expect(xit).toHaveBeenCalledWith("might run a test with x as the value", jasmine.any(Function));
        expect(xit).toHaveBeenCalledWith("might run a test with y as the value", jasmine.any(Function));
        expect(xit).toHaveBeenCalledWith("might run a test with z as the value", jasmine.any(Function));
    });

    it("runs `it` with each value in the array and a message with the argument appended", function() {
        xit = jasmine.createSpy("xit");

        var handler = jasmine.createSpy("handler");
        theoretically.xit("can handle this value:", [ 1, 2, 3 ], handler);

        expect(xit).toHaveBeenCalledWith("can handle this value: 1", jasmine.any(Function));
        expect(xit).toHaveBeenCalledWith("can handle this value: 2", jasmine.any(Function));
        expect(xit).toHaveBeenCalledWith("can handle this value: 3", jasmine.any(Function));
    });

    it("throws if `xit` isn't available in global scope", function() {
        delete xit;

        expect(function() {
            theoretically.xit("can handle this value:", [1, 2, 3], function() {});
        }).toThrow(jasmine.any(ReferenceError));
    });

    it("fails if args is not an array", function() {
        expect(function() {
            theoretically.xit("can handle this value:", "not an array", function() {});
        }).toThrow(jasmine.any(Error));
    });

    it("fails if args is an empty array", function() {
        expect(function() {
            theoretically.xit("can handle this value:", [], function() {});
        }).toThrow(jasmine.any(Error));
    });
});

