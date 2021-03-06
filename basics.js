var word = "potato";

console.log(typeof word); // string

Math.max(5,1,2,6); // 6
Math.min(5,1,2,6); // 1
confirm("click on cancel or ok"); //returns true or false depending on user input
prompt("enter something", "placeholder"); // will return user input as string
var number = Number(prompt("write a number", "")); //Casts the string into a number


// ***********************************
var num = 5;
if(isNaN(num)){
    console.log("is not a number...");
}
else if(typeof num == "string"){ //will never execute since if takes care of all non-numbers
    console.log("no text allowed");
}
else{
    console.log("is a number");
}

// ***********************************
var num = 0;

while (num <= 5){
    console.log(num);
    num += 1;
}

do {
  var name = prompt("Who are you?");
} while (!name);
console.log(name);

for(var number = 0 ; number <= 5 ; number += 1){
    console.log(number);
}

// *********************************** CLOSURE
function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}
var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

// MORE
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));
// → 10

//Higher order functions. Functions that act on other functions

function forEach(array, action){
    for(var i = 0 ; i < array.length ; i++){
        action(array[i])
    }
}

var numbers = [1,2,3,4,5];
var sum = 0;

forEach(numbers, function(number){
    sum += number;
});

//
function largerThan(n){
  return function(m) { return m > n };
}

// Objects
var person = {
  name: "Jose",
  age: 30,
  "The power": "Programming"
};

person.weakness = "food";

delete person.weakness //deletes the property value pair

("name" in person); // returns true. property needs to be in strings