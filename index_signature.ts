// what is index signature in typescript
// an index signature in typescript  alllow you to define objects with dynamic keys while specifying the type of the keys and values

// type userData7Type ={
//     [key: string]: string | number
// }
//  var userData7:userData7Type = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     country: "USA",
//     mobile: 1234567890
//  }

    type userData7Type ={
            name :string,
            id:number,
            mobile:number,
        [key: string]: string | number
    }

        var userData7:userData7Type = {
            name:"manoj",
            mobile: 1234567890,
            id: 101,
            marks: 95,
            age :30,
            semester :3,
        }

