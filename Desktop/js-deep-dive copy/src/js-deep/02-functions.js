/**
 * Return result of calling function with arguments as present in array
 */
exports.argsAsArray = function(fn, arr) {
    return fn.call(null, ...arr);
};

/**
 * Return the result of calling a function with the provided obj as context
 * for the implicit argument this
 */
exports.speak = function(fn, obj) {

    return fn.call(obj);
};

/**
 * Return a prefixer function that concatenates a string argument with a prefix
 */
exports.stringPrefixer = function(prefix) {

    return sufix => prefix + sufix;
};

/**
 * Create an array of functions, each producing a result obtained
 * from applying the transform function to an argument from values array
 */
exports.makeResultFunctions = function(values, transform) {

    return values.map(element => () => transform(element));
};

/**
 * From a function which receives three arguments,
 * of which only two are available, create a new function
 * which wraps the original one with the missing argument
 */
exports.createWrapperFunction = function(fn, arg1, arg2) {

    return arg => fn(arg1, arg2, arg);
};

/**
 * Return the sum of all arguments
 */
exports.sumArguments = function(...args) {

   return args.reduce((element, accum) => accum += element);
};

/**
 * Execute the function, passing it all the provided arguments
 */
exports.callIt = function(fn, ...args) {

    return (fn(...args));
};

/**
 * From a function which receives a variable number of arguments,
 * return a wrapper function which adds additional arguments to the ones
 * available and calls the original function
 */
exports.createAddArgumentsFunction = function(fn, ...args) {

    return (...args2) => fn(...(args).concat(args2));
};
