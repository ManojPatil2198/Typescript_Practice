// what is utility types 
// in ts, utility types are built-in types that help
// transform or manipulate other types in a convenient way .
//1-partial
//2-Required
//3-readonly
//4-pick
//5-Omit
//6-Exclude
//7-NanNullable
//8-Record


interface CollegeType {
    name: string;
    location: string;
    students: number;
    branch?: number;
}


var CollegeData6:Omit<CollegeType,'branch'>={
    name:'iit delhi',
    location:'delhi',
    students:1000
}

type  APIStatus="loading"|"error"|"pending"|"succes";

// var APICall:Exclude<APIStatus,"pending">="success";
// APICall="loading";


// var APICall1:Extract<APIStatus,'error'|'succes'>;
// APICall1 ='error'


type RandomType =string|number|undefined|null|string [];

var RandomType:NonNullable<RandomType>=20


type SiteRole ='Admin'|'user'|'guest'
var SiteRoleOption:SiteRole='Admin'

var RoleName:Record<SiteRole,string>={
  Admin:'manoj',
  user:'patil',
  guest:'peter'
}

// let CollegeData3: Partial<CollegeType> = {
//     name: "IIT Delhi",
//     location: "delhi",
//     students: 700
// };

function getCollegeData(data:Partial<CollegeType>){

}

getCollegeData({name:'IIT Delhi',location:'delhi'})



function getCollegeData2(data:Required<CollegeType>){

}

getCollegeData2({name:'IIT Delhi',location:'delhi',students:30,branch:3})




// var CollegeData3:Readonly<CollegeType>={
//     name:"IIT Delhi",
//     location:"delhi",
//     students:400,
//     branch:5
// }
//   CollegeData3.name="IIT MUmbai"




  var CollegeData4:Pick<CollegeType,'name'|'location'>={
    name:"IIT Delhi",
    location:"delhi",
    
  }