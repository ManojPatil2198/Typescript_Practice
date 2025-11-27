// what is type in typescript
// define custom data type for variable, function, object, etc.
// helps in type checking and code readability

type DataType = {name: string, email: string}

 type a={name:string};
type b={email:string};

type c = a |b;

var empData1: DataType = {
    name: "John",
    email: "john@example.com"
    }

var studentData1DataType: {
    name: 'sam',
     email:'sam@college.com' 
    }