var person = {
    a: 23,
    say(){console.log("Hello World")}
}

let createDelegate = function(person) {

       return function(){
           var code = function(){
               
           }

       }
};


var a = createDelegate(person);

console.log(a.a);












