// what is keyof operator in typescript
// keyof operator is used to get the keys of a type as a union of string literal types
//it is primarily used for type safety when working with objects
let PersonData = {
    name: "John",
    age: 30,
    isEmployed: true,
};
let PersonDataX;
PersonDataX = "name";
PersonDataX = "age";
PersonDataX = "isEmployed";
// PersonDataX = "address"; // Error: Type '"address"' is not assignable to type 'PersonX'.
let UserX = "age"; // "name" | "age" | "isEmployed"
export {};
