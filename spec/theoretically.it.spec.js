const _ = require("lodash");
const theoretically = require("../index.js");

[
    { key: "it", name: "A theory" },
    { key: "xit", name: "A pending theory" },
].forEach(({ key, name }) => {
    describe(name, function() {
        let oldIt;

        beforeEach(function() {
            oldIt = global[key];
        });

        afterEach(function() {
            global[key] = oldIt;
        });

        it("runs `it` with each value in the value array and a formatted message", function() {
            it = jasmine.createSpy("it");

            const handler = jasmine.createSpy("handler");
            theoretically.it("might run a test with %s as the value", [ "x", "y", "z" ], handler);

            expect(it).toHaveBeenCalledWith("might run a test with x as the value", jasmine.any(Function));
            expect(it).toHaveBeenCalledWith("might run a test with y as the value", jasmine.any(Function));
            expect(it).toHaveBeenCalledWith("might run a test with z as the value", jasmine.any(Function));

            const itCalledWithX = _.find(it.calls.allArgs(), function(args) {
                return args[0] == "might run a test with x as the value";
            });

            const itCalledWithY = _.find(it.calls.allArgs(), function(args) {
                return args[0] == "might run a test with y as the value";
            });

            const itCalledWithZ = _.find(it.calls.allArgs(), function(args) {
                return args[0] == "might run a test with z as the value";
            });

            if(!itCalledWithX || !itCalledWithY || !itCalledWithZ) {
                return expect("Failed to get one of the calls").toBeFalsy();
            }

            expect(handler).not.toHaveBeenCalled();

            const xHandler = itCalledWithX[1];
            xHandler();

            expect(handler.calls.count()).toEqual(1);
            expect(handler).toHaveBeenCalledWith("x");

            const yHandler = itCalledWithY[1];
            const fakeCallback = { fakeCallback: true };
            yHandler(fakeCallback);

            expect(handler.calls.count()).toEqual(2);
            expect(handler).toHaveBeenCalledWith("y", fakeCallback);

            const zHandler = itCalledWithZ[1];
            zHandler();

            expect(handler.calls.count()).toEqual(3);
            expect(handler).toHaveBeenCalledWith("z");
        });

        it("runs `it` with each value in the array and a message with the argument appended", function() {
            it = jasmine.createSpy("it");

            const handler = jasmine.createSpy("handler");
            theoretically.it("can handle this value:", [ 1, 2, 3 ], handler);

            expect(it).toHaveBeenCalledWith("can handle this value: 1", jasmine.any(Function));
            expect(it).toHaveBeenCalledWith("can handle this value: 2", jasmine.any(Function));
            expect(it).toHaveBeenCalledWith("can handle this value: 3", jasmine.any(Function));

            const itCalledWithX = _.find(it.calls.allArgs(), function(args) {
                return args[0] == "can handle this value: 1";
            });

            const itCalledWithY = _.find(it.calls.allArgs(), function(args) {
                return args[0] == "can handle this value: 2";
            });

            const itCalledWithZ = _.find(it.calls.allArgs(), function(args) {
                return args[0] == "can handle this value: 3";
            });

            if(!itCalledWithX || !itCalledWithY || !itCalledWithZ) {
                return expect("Failed to get one of the calls: " + itCalledWithX + " " + itCalledWithY + " " + itCalledWithZ).toBeFalsy();
            }

            expect(handler).not.toHaveBeenCalled();

            const xHandler = itCalledWithX[1];
            xHandler();

            expect(handler.calls.count()).toEqual(1);
            expect(handler).toHaveBeenCalledWith(1);

            const yHandler = itCalledWithY[1];
            const fakeCallback = { fakeCallback: true };
            yHandler(fakeCallback);

            expect(handler.calls.count()).toEqual(2);
            expect(handler).toHaveBeenCalledWith(2, fakeCallback);

            const zHandler = itCalledWithZ[1];
            zHandler();

            expect(handler.calls.count()).toEqual(3);
            expect(handler).toHaveBeenCalledWith(3);
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
});
