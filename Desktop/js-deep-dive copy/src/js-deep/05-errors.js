/**
 * Return the result of invoking the provided function
 * If an exception is thrown, return the enclosed error message
 */
exports.callIt = function(fn) {

    try {
      return fn();

    } catch (err) {

      return(err.message); // something went wrong
    }
};

/**
 * Return true if the provided arguments are equal,
 * throw an error with an enclosed message otherwise
 */
exports.assertEqual = function(a, b) {
    
    if(a === b) return true;

    throw new Error("arguments are not equal")
};

/**
 * Return a custom error constructor with a timestamp property
 * indicating when the error occurred
 */
exports.createCustomError = function() {
     
    var error = Error(message); 
    this.name = 'CustomError'; 
    this.message = error.message; 
    this.stack = error.stack;
    this.module = module; 

    
};

