//what is promise 
function complexLogic() {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved({
                name: 'anil',
                id: 10,
                email: 'anil22@gamil.com'
            });
        }, 2000);
    });
}
export {};
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
