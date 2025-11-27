// what is typeguard in TypeScript?
//  a typeguard in typescript is a technique used tov narrow down the type of a variable within a condtional block.
// there are in typeguards types
// 1. typeof type guard
// 2. instanceof type guard
// 3. custom type guard
//  let userData20:number | string | boolean="manoj patil";
//     if(typeof userData20==="boolean"){
//         console.log('this is boolean type');
//     }
//     else if(typeof userData20==="number"){
//         console.log('this is number type');
//     }
//     else{
//         console.log('this is string type');
//     }
// function checkDataType(data:string | number ) {
//     if (typeof data === "number") {
//         console.log("this is number type");
//     }
//     else {
//         console.log("this is string type");
//     }
// }
//   checkDataType("manoj");
class Product21 {
}
var p1 = new Product21();
class Order21 {
}
var o1 = new Order21();
function checkDetails(data) {
    if (data instanceof Product21) {
        console.log("this is product type");
    }
    else {
        console.log("this is order type");
    }
}
checkDetails(p1);
export {};
