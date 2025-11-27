//what is inheritance in typescript?
// Inheritance in TypeScript is a mechanism that allows a class to inherit properties and methods from another class. 
// This promotes code reusability and establishes a hierarchical relationship between classes. 
export class Auth {
    login(name, password) {
        if (name && password) {
            return "Student Login Successful";
        }
        else {
            return "Student Login Failed";
        }
    }
}
class Student extends Auth {
    result(marks) {
        if (marks >= 40) {
            return "Pass";
        }
        else {
            return "Fail";
        }
    }
}
var s1 = new Student();
console.log(s1.result(50));
class Teacher extends Auth {
    subject(subject) {
        return "he teaches " + subject;
    }
}
var t1 = new Teacher();
console.log(t1.login("sam", "1234"));
