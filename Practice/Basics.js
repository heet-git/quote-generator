var firstname = "John";
console.log(firstname);

var lastname;
lastname = "Patel";
console.log(lastname + " " + firstname);

JohnAge = 30;
RonAge = 28;

var whoisolder = JohnAge < RonAge;
console.log(whoisolder);
console.log(typeof whoisolder);
console.log(JohnAge + 2);

/*var JohnWeight, MarkWeight, JohnHeight, MarkHeight;
JohnWeight = 60;
MarkWeight = 70;
JohnHeight = 1.5;
MarkHeight = 1.7;

var JohnBMI = JohnWeight / (JohnHeight * JohnHeight);
var MarkBMI = MarkWeight / (MarkHeight * MarkHeight);

if (JohnBMI > MarkBMI) {
  console.log("John BMI is higher than Marks BMI");
} else {
  console.log("Marks BMI is higher than Johns BMI");
}
console.log(JohnBMI);
console.log(MarkBMI);*/

/*JohnBMI > MarkBMI //Tarnary Op
  ? console.log("John BMI is higher than Marks BMI")
  : console.log("Marks BMI is higher than Johns BMI");

var drink = JohnAge >= 18 ? "Whatever he can drink" : "No Alcohol";
console.log(drink);

// == does type coersion(Only compare variable not value) while === checks both value and datatype too. JohnHeight = 30 is same as JohnHeight == '30' but JohnHeight = 30 is not same as JohnHeight === '30' becuase of different data type.

var JohnScore1, JohnScore2, JohnScore3;
JohnScore1 = 89;
JohnScore2 = 120;
JohnScore3 = 103;

var MikeScore1, MikeScore2, MikeScore3;
MikeScore1 = 116;
MikeScore = 94;
MikeScore3 = 123;

var MaryScore1, MaryScore2, MaryScore3;
MaryScore1 = 97;
MaryScore = 134;
MaryScore3 = 105; */

var JohnScore = (89 + 120 + 103) / 3;
var MikeScore = (116 + 94 + 123) / 3;
var MaryScore = (97 + 134 + 105) / 3;

/*if (AvgJohnScore > AvgMikeScore) {
  console.log("John's team win the match with " + AvgJohnScore + " points");
} else if (AvgJohnScore == AvgMikeScore) {
  console.log("Match TIED");
} else {
  console.log("Mike's team win the match with " + AvgMikeScore + " points");
}*/

if (JohnScore > MikeScore && JohnScore > MaryScore) {
  console.log("John's team win the match with " + JohnScore + " score");
} else if (MikeScore > JohnScore && MikeScore > MaryScore) {
  console.log("Mike's team win the match with " + MikeScore + " score");
} else if (MaryScore > MikeScore && MaryScore > JohnScore) {
  console.log("Mary's team win the match with " + MaryScore + " score");
} else {
  console.log("Match tied");
}

//Determine the retirement age using function

function calculateAge(birthyear) {
  return 2020 - birthyear;
}

var Johnage = calculateAge(1996);
console.log(Johnage);

function retirementAge(year, name) {
  var currentage = calculateAge(year);
  var retirement = 65 - currentage;
  if (retirement > 0) {
    console.log(name + " retires in " + retirement + " years.");
  } else if (retirement == 0) {
    console.log(name + " is retireing this year.");
  } else {
    console.log(name + " is already retired.");
  }
}
retirementAge(1996, "Hardik");
retirementAge(1994, "Moni");

//Function declaration
//function WhatDoYouDo (job, firstName) {}

//Function expression
// var whatDoYouDo = funtion (job, firstName) {}

// Both works the same.
function whatyouDo(job, name) {
  switch (job) {
    case "teacher":
      return name + " teaches coding";
    case "Cop":
      return name + " protect the civilians";
    case "driver":
      return name + " transport laguages.";
    default:
      return name + " idgaf what he does.";
  }
}

console.log(whatyouDo("teacher", "Hardik"));

//Arrays
var names = ["John", "Mark", "Jane"];
var year = new Array(1990, 1999, 2000); //Old way
var moon = ["round", "white", "satellite"];
names.push("Heet");

names.unshift("Monu");
console.log(names);
names.pop(); //removes from end.
names.shift(); //removes from starting
console.log(names.indexOf("Mark")); //at which position Mark is in array.
console.log(names);

var property =
  moon.indexOf("round") === -1 ? "No, Moon is flat" : "Yes, Moon is round";
console.log(property);

// Challenge 3

var pushTips = [];
var pushFinalValues = [];

function tipCalculator(bills) {
  var tip;
  if (bills < 50) {
    tip = 0.2;
  } else if (bills >= 50 && bills < 200) {
    tip = 0.15;
  } else {
    tip = 0.1;
  }
  return tip * bills;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];
var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(tips, finalValues);

// Challenge 3 with push method
pushTips.push(
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
);
pushFinalValues.push(
  bills[0],
  bills[1],
  bills[2],
  "tips >",
  tips[0],
  tips[1],
  tips[2]
);

console.log(pushTips);
console.log(pushFinalValues);

// Objects & Properties.
// Objects can hold different types of data. Including
// array and other objects.

var john = {
  firstName: "John",
  lastName: "Wick",
  family: ["Dog", "Black Car"],
  Birthyear: 1979,
  job: "Contract Killer",
  married: "Widower",
  calcAge: function () {
    this.age = 2020 - this.Birthyear;
  },
};
console.log(john.family);
console.log(john["job"]);
var x = "job"; //Using variable
console.log(john[x]);
console.log(john);

john.job = "Assassin";
john["married"] = "single";
console.log(john);

var jane = new Object(); // Another way to create obj.
jane.firstName = "Jane";
jane["lastName"] = "Smith";
console.log(jane);

//Challenge 4

var Johnn = {
  fullName: "John Smith",
  weight: 85,
  height: 1.8,
  johnnBMI: function () {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};
// Objects can also have methods.
// Methods are actions that can be perfromed on objects.
// A method is a function stored as a property.

var Markk = {
  fullName: "Markk Twin",
  weight: 85,
  height: 1.8,
  markkBMI: function () {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};
Johnn.johnnBMI();
Markk.markkBMI();
console.log(Johnn);
console.log(Markk);
if (Johnn.bmi > Markk.bmi) {
  console.log(
    Johnn.fullName + "'s BMI is higher than Mark. John's BMI is " + Johnn.bmi
  );
} else if (Johnn.bmi < Markk.bmi) {
  console.log(
    Markk.fullName + "'s BMI is higher than John. Mark's BMI is " + Markk.bmi
  );
} else {
  console.log("Both John's and Mark's BMI are same");
}

//Loops and iteration
for (var i = 0; i <= 10; i++) {
  console.log(i);
}

var john = ["john", "smith", 1996, "Doctor"];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}
// With while
console.log("With whilecontinue >>");
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}

//continue
console.log("continue >>");
var john = ["john", "smith", 1996, "Doctor"];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
}
//break
console.log("break >>");
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  console.log(john[i]);
}
// Looping backward
console.log("reverse loop >>");
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}

// Coding challenge 5 Part-I

var johnBill = {
  fullName: "John",
  bills: [124, 48, 268, 180, 42],
  finalTips: [],
  billPlusTips: [],
  tipCal: function () {
    for (var i = 0; i < this.bills.length; i++) {
      var tips;
      var bill = this.bills[i];
      if (bill < 50) {
        tips = bill * 0.2;
      } else if (bill >= 50 && bill < 200) {
        tips = bill * 0.15;
      } else {
        tips = bill * 0.1;
      }
      this.finalTips[i] = tips;
      this.billPlusTips[i] = bill + tips;
    }
  },
};

// Coding challenge 5 Part-II

var markBill = {
  fullName: "Mark",
  bills: [77, 475, 110, 45],
  finalTips: [],
  billPlusTips: [],
  tipCal: function () {
    for (var i = 0; i < this.bills.length; i++) {
      var tips;
      var bill = this.bills[i];
      if (bill < 100) {
        tips = bill * 0.2;
      } else if (bill >= 100 && bill < 300) {
        tips = bill * 0.1;
      } else {
        tips = bill * 0.25;
      }
      this.finalTips[i] = tips;
      this.billPlusTips[i] = bill + tips;
    }
  },
};
johnBill.tipCal();
markBill.tipCal();

//Create function to calculate "finalTips".
//Create loop
//Store the total sum in the var and divide it by
//total no of tips.
// tips john [12.4, 9.60, 26.8, 18, 8.4]
// tips mark [15.4, 118.75, 27.5, 9]
//var johnTip = johnBill.finalTips;
//var markTip = markBill.finalTips;

function avgTips(Tips) {
  var sum = 0;
  for (var i = 0; i < Tips.length; i++) {
    sum = sum + Tips[i];
  }
  return sum / Tips.length;
}
johnBill.average = avgTips(johnBill.finalTips);
markBill.average = avgTips(markBill.finalTips);
console.log(johnBill);
console.log(markBill);
