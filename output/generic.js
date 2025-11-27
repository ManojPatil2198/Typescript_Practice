// what is generic in typescript
// generics provide a way to create reusable components
// it allows to work with any data type
// it helps to create components that can work with a variety of data types rather than a single one
function fruits10(name) {
    return name;
}
function fruitsAny(name) {
    return name;
}
//  let onlyFruit=fruitsAny("apple");
//  let onlyNum = fruitsAny(100);
//  let onlyBool=fruitsAny(true);
let onlyFruit = fruits10("apple");
let onlyNum = fruits10(100);
let onlyBool = fruits10(true);
function Users17(data) {
    return data[0];
}
let usercollection = Users17([10, 20, 30]);
export {};
