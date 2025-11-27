// what is never type in typescript
// A function that never returns a value
// because it either throws an error or has an infinite loop
function loopFunction():never{
    while (true) {
    console.log("This function will never terminate.");
    }
}

function simple1():never{
    throw new Error("This function always throws an error.");
}