jasmine-theories
================

This lib adds theories to jasmine.
Theories make it possible to run the same testing code with varying inputs.
It should only be used when a case holds true for a variety of similar values, such as in the example provided below.

Let's assume a spec theory, using `theoreticallyIt`:

```js
// proposal 1
describe("NumberStack", function() {
  theoreticallyIt("fails if the inserted value is not a number, but is", [ null, false, new Error("hello"), "str" ], function(insertedValue, done) {
    var stack = new NumberStack();
    expect(function() {
      stack.push(insertedValue);
    }).toThrow();
  });
});

// proposal 2
describe("NumberStack", function() {
  theoreticallyIt("fails if the inserted value is not a number", [ null, false, new Error("hello"), "str" ], function(insertedValue, done) {
    var stack = new NumberStack();
    expect(function() {
      stack.push(insertedValue);
    }).toThrow();
  });
});

// proposal 3
describe("NumberStack", function() {
  theoreticallyIt("fails if the inserted value is %s (not a number)", [ null, false, new Error("hello"), "str" ], function(insertedValue, done) {
    var stack = new NumberStack();
    expect(function() {
      stack.push(insertedValue);
    }).toThrow();
  });
});
```

We would want this output if the cases `false` and `new Error("hello")` fails:

```
// proposal 1
Failed: NumberStack fails if the inserted value is not a number, but is false
Failed: NumberStack fails if the inserted value is not a number, but is Error

// proposal 2
Failed: NumberStack fails if the inserted value is not a number (fails with `false`)
Failed: NumberStack fails if the inserted value is not a number (fails with `Error`)

// proposal 3
Failed: NumberStack fails if the inserted value is false (not a number)
Failed: NumberStack fails if the inserted value is Error (not a number)
```
