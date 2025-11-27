 // what is tuple in TypeScript?
// It is a collection of different data types
// pre-defined data type

var emp:string[] = ['John', 'Doe', 'Smith']; // array of strings
var empData:[number, string, boolean] = [1, 'John Doe', true]; // tuple with number, string and boolean

empData.push('noida'); // valid operation, as tuples are extendable.

console.log(empData);