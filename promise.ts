//what is promise 

//async program handle

// function test1(){
//     setTimeout(()=>{
//     console.log("test1");
//     },2000);
// }

// function test2(){
//     console.log("test2")
// }

// test1();
// test2();


 interface resultType {
    name:string,
    id:number,
    email:string
}

 function complexLogic():Promise<resultType>{
    return new Promise((resolved)=>{
        setTimeout(()=>{
            resolved({
                name:'anil',
                id:10,
                email:'anil22@gamil.com'
            })
        },2000);
    })
 }
























// function complexLogic (){
//     return new Promise((resolved)=>{
//         setTimeout(()=>{
//             resolved("result is here")
//         },2000);
//     })
// }

// complexLogic().then((data)=>{
//     console.log(data);
//     test2()
// })

// function test2(){
//     console.log("test2");
// }
