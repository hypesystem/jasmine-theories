jasmine-theories
================

This lib adds theories to jasmine.
Theories make it possible to run the same testing code with varying inputs.
It should only be used when a case holds true for a variety of similar values, such as in the example provided below.

Let's assume a spec theory, using `theoreticallyIt`:

```js
var theoretically = require("jasmine-theories");

describe("NumberStack", function() {
  theoretically.it("fails if the inserted value is %s (not a number)", [ null, false, new Error("hello"), "str" ], function(insertedValue) {
    var stack = new NumberStack();
    expect(function() {
      stack.push(insertedValue);
    }).toThrow();
  });
});
```

We would want this output if the cases `false` and `new Error("hello")` fails:

```
Failed: NumberStack fails if the inserted value is false (not a number)
Failed: NumberStack fails if the inserted value is Error: hello (not a number)
```

The library also supports `theoretically.xit`, which adds pending tests to the spec.
