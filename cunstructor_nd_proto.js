// Function constructor

var Person = function (
  name,
  yob,
  job // first word capital in object name
) {
  this.name = name;
  this.yob = yob;
  this.job = job;
};
Person.prototype.calcAge = function () {
  console.log(2020 - this.yob);
};
Person.prototype.lastname = "Smith"; //Property inheritance

//Intantiation

var john = new Person("John", 1996, "teacher");
console.log(john);
john.calcAge();
console.log(john.lastname);

// Object.create

var personProto = {
  calculateAge: function () {
    console.log(2020 - yearofBirth);
  },
};

var bob = Object.create(personProto);
bob.name = "Bob";
bob.yearofBirth = 1996;
bob.job = "teacher";

var jane = Object.create(personProto, {
  //function way
  name: { value: "Jane" },
  yearofBirth: { value: 1996 },
  job: { value: "designer" },
});

(function (goodLuck) {
  //Immediately Inovked Function Expression
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
