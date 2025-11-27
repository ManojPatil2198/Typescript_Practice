 // what is keyof operator in typescript
// keyof operator is used to get the keys of a type as a union of string literal types
//it is primarily used for type safety when working with objects

type PersonT = {
    name: string;
    age: number;
    isEmployed: boolean;
};
  let  PersonData: PersonT = {
    name: "John",
    age: 30,
    isEmployed: true,
};

type PersonX = keyof PersonT; // "name" | "age" | "isEmployed"

let  PersonDataX: PersonX;

PersonDataX = "name";
PersonDataX = "age";
PersonDataX = "isEmployed";
// PersonDataX = "address"; // Error: Type '"address"' is not assignable to type 'PersonX'.


let UserX: keyof typeof PersonData ="age"; // "name" | "age" | "isEmployed"