var theoretically = require("../index.js");

describe("A theory", function() {
    var oldIt;

    beforeEach(function() {
        oldIt = it;
    });

    afterEach(function() {
        it = oldIt;
    });

    it("has a test that makes sure the handler has the value bound");

    it("runs `it` with each value in the value array and a formatted message", function() {
        it = jasmine.createSpy("it");

        var handler = jasmine.createSpy("handler");
        theoretically.it("might run a test with %s as the value", [ "x", "y", "z" ], handler);

        expect(it).toHaveBeenCalledWith("might run a test with x as the value", jasmine.any(Function));
        expect(it).toHaveBeenCalledWith("might run a test with y as the value", jasmine.any(Function));
        expect(it).toHaveBeenCalledWith("might run a test with z as the value", jasmine.any(Function));
    });

    it("runs `it` with each value in the array and a message with the argument appended", function() {
        it = jasmine.createSpy("it");

        var handler = jasmine.createSpy("handler");
        theoretically.it("can handle this value:", [ 1, 2, 3 ], handler);

        expect(it).toHaveBeenCalledWith("can handle this value: 1", jasmine.any(Function));
        expect(it).toHaveBeenCalledWith("can handle this value: 2", jasmine.any(Function));
        expect(it).toHaveBeenCalledWith("can handle this value: 3", jasmine.any(Function));
    });

    it("throws if `it` isn't available in global scope", function() {
        delete it;

        expect(function() {
            theoretically.it("can handle this value:", [1, 2, 3], function() {});
        }).toThrow(jasmine.any(ReferenceError));
    });

    it("fails if args is not an array", function() {
        expect(function() {
            theoretically.it("can handle this value:", "not an array", function() {});
        }).toThrow(jasmine.any(Error));
    });

    it("fails if args is an empty array", function() {
        expect(function() {
            theoretically.it("can handle this value:", [], function() {});
        }).toThrow(jasmine.any(Error));
    });
});
