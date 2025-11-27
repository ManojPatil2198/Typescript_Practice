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
var CollegeData6 = {
    name: 'iit delhi',
    location: 'delhi',
    students: 1000
};
var RandomType = 20;
var SiteRoleOption = 'Admin';
var RoleName = {
    Admin: 'manoj',
    user: 'patil',
    guest: 'peter'
};
// let CollegeData3: Partial<CollegeType> = {
//     name: "IIT Delhi",
//     location: "delhi",
//     students: 700
// };
function getCollegeData(data) {
}
getCollegeData({ name: 'IIT Delhi', location: 'delhi' });
function getCollegeData2(data) {
}
getCollegeData2({ name: 'IIT Delhi', location: 'delhi', students: 30, branch: 3 });
// var CollegeData3:Readonly<CollegeType>={
//     name:"IIT Delhi",
//     location:"delhi",
//     students:400,
//     branch:5
// }
//   CollegeData3.name="IIT MUmbai"
var CollegeData4 = {
    name: "IIT Delhi",
    location: "delhi",
};
export {};
