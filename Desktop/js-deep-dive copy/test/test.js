var person = {
    name: 'Pedro',
    greeting: 'Hello, ',
    say: function() {
        return this.greeting + this.name + '!';
    }
};

createDelegate = function(person) {

    (function(person){
        createDelegate.prototype = person;
    })(person);
};

let test = createDelegate(person);

console.log(test.name);















