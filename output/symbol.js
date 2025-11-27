"use strict";
// var sym = Symbol();
// var sym1 = Symbol();
Object.defineProperty(exports, "__esModule", { value: true });
// var sym2 = Symbol();
// var sym3 = Symbol();
// console.log(sym ==sym1); // false
// console.log(sym);
// console.log(sym2);
const dId = Symbol("id");
const obj = {
    [dId]: 100,
    name: "manoj"
};
console.log(obj[dId]);
