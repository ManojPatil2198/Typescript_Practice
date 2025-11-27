// what is interface in typescript
// An interface in TypeScript is a syntactical contract that defines the shape of an object. 
// It specifies the properties and methods that an object must have, without providing the implementation details. 
// Interfaces are used to define the structure of data and to enforce type-checking in TypeScript.


// Interface: Defines the structure of an object
interface Info {
  name: string;
  age: number;
  college: string;
}

// Interface extending another interface
interface TeacherType extends Info {
  subject: string; // Extra property
}

// Object following Info interface
var studentObj: Info = {
  name: "John Doe",
  age: 20,
  college: "ABC University"
};

// Object following TeacherType interface
var teacherObj: TeacherType = {
  name: "Jane Smith",
  age: 35,
  college: "ABC University",
  subject: "Mathematics"
};

// Another Info object
var managementObj: Info = {
  name: "Smith",
  age: 45,
  college: "ABC University"
};
