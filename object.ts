// what is object in typescript
// object is a collection of key value pairs

// var userData:{

//     name:string,
//     age:number,
//     company:string

// }={
//     name:"John",
//     age:30,
//     company:"Google"
// }

// userData.name="Doe";

// console.log(userData);

 var userData:{

//    [key: string]: string | number | undefined
// ya 2 types ahet 
//     name:string,
//     age:number,
//     company?:string | undefined
    

// }={
//     name:"John",
//     age:30,
//     company:undefined
// }

    name:string,
    age:number,
    company :string,
    address:{
        houseNumber:number,
        sector:string,
        city:string
    } 

    

}={
    name:"John",
    age:30,
    company:"Google",
    address:{
        houseNumber:123,
        sector:"22B",
        city:"New York"
    }
}
