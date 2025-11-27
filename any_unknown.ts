// what is any data type in typescript?
// The 'any' data type in TypeScript is a type that can hold any value
// when a moigration from JavaScript to TypeScript is in progress.
// when dealing with dynamic values from APIs

// unknown data type in typescript?
// The 'unknown' type represents any value,
//  but is safer than 'any' because it requires type checking before performing operations on it.


var value:any ="manoj";

value =100

value =["manoj"]

value =true;

var value1:unknown ="manoj";
value1 =100

value1 =["manoj"]

value1 =true;

if(typeof value1 ==="string"){
    console.log(value1.toUpperCase());
}