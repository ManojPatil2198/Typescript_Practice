 // what is the intersection  of these two types?
 // Answer:
 //✅ What is Intersection in TypeScript?

// In TypeScript, an intersection (&) is used to combine multiple types into one.


//“The new type must include all properties from both types.”

//Intersection = Type A + Type B together. 

type PersonA = {name:string}
type PersonB = {age:number}
type PersonC = PersonA & PersonB

var PersonA :PersonA={name:"John"}
var PersonB :PersonB={age:30}

var PersonDataC :PersonC={name:"John",age:30}

