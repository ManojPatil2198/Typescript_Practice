// what is enum in TypeScript?
// a data type that allows you to define a set of named constants,
//  making your code more readable and maintainable.

enum whoType {
  student = "student",
  teacher = "teacher",
  admin = "admin",
  management = "management"
}

var who: whoType = whoType.student;

who = whoType.student;

console.log(whoType.management); // "student"
 // valid


 enum Fruit {
    a="apple",
    b="banana",
    c="cherry"
 }

    var myFruit: Fruit = Fruit.a;

    myFruit = Fruit.b;

    console.log(myFruit); // "banana"