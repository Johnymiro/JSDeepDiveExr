/**
 * Creates a counter module with an initial value, zero if not provided
 * The counter module should have get, increment and reset methods
 */
exports.createCounter = function(counter = 0) {

   

    return {

         get: function(){
             return counter;
         },

         increment: function (){
              counter++;
         },
         reset: function(){
              counter = 0;
         }
     }

};



/**
 * Creates a person module with name and age
 * An initial name value should be provided and
 * an exception thrown if not,
 * the module should have getAge, setAge and getName methods
 */
exports.createPerson = function(name) {



};
