// what is enum in TypeScript?
// a data type that allows you to define a set of named constants,
//  making your code more readable and maintainable.
var whoType;
(function (whoType) {
    whoType["student"] = "student";
    whoType["teacher"] = "teacher";
    whoType["admin"] = "admin";
    whoType["management"] = "management";
})(whoType || (whoType = {}));
var who = whoType.student;
who = whoType.student;
console.log(whoType.management); // "student"
// valid
var Fruit;
(function (Fruit) {
    Fruit["a"] = "apple";
    Fruit["b"] = "banana";
    Fruit["c"] = "cherry";
})(Fruit || (Fruit = {}));
var myFruit = Fruit.a;
myFruit = Fruit.b;
console.log(myFruit); // "banana"
export {};
