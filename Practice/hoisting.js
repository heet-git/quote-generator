// Hoisting: Default behavior of JS, where it moves declarations to the top.
//JavaScript Declarations are Hoisted.

x = 3; // Assignment of variable
y = 4;

console.log(x + " " + y);

var x; // declaration and initialization of variable.
var y;

//In JavaScript, a variable can be declared after it has been used.
//In other words; a variable can be used before it has been declared.
// Declaration Types: "var" has been in js since initial release but "let" and "const" are only available in ES6.

a = 3;

console.log(a + " " + b);

var a;
var b = 4; /* Only declaration (var b) is hoisted not the assignment. 
That's why output of b is undefined.*/

//To avoid bugs, always declare all variables at the beginning of every scope.
/* Best use of hoisting is not that we can use 
variable before declaring it but is function 
that we can use before declaring it.*/

/* "this" keyword points toward global object 
when it is alone or in function but if it is in 
method it refers to the owner object. */

var john = {
  name: "John",
  yearofBirth: 1996,
  calculateAge: function () {
    console.log(this); //"this" keyword refers to the object that called the method.
  },
};
john.calculateAge();

// call() and apply() are predefined JavaScript methods.

var person1 = {
  fullName: function () {
    return console.log(this.firstName + " " + this.lastName);
  },
};
var person2 = {
  firstName: "John",
  lastName: "Doe",
};
var x = person1.fullName.call(person2);
//You can use either call or apply.
