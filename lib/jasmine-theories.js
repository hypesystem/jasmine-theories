var oldIt = it;

it = function itWithTheories(name, args, test) {
    if(!test) {
        return oldIt(name, test);
    }

    args.forEach(function(arg) {
        it(name, test.bind(this, arg));
    });
};
