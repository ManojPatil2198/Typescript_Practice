//  what is union type?
// Union type allows a variable to hold more than one type of data.
// It is defined using the pipe (|) symbol between the types.

// data type declaration with union type
// Example 1: A variable that can hold either a string or a number
var studentData:string | number | [] ="John Doe";
studentData = 25; // valid

studentData=[]


// Example 2: A function that can return either a string or an array of strings
function fruitsData (): string | string[]  | number{
    var item = 1;
    if(item>1){
        return ["apple","banana","grapes"];
}
 else {
    return "Apple";
 }
}
 console.log(fruitsData());  


// Example 3: A function parameter that can accept either a string or a number
 function studentInfo(name: string |number | boolean) {
 return name;
   
}

studentInfo("Alice"); // valid
studentInfo(123); // valid