class CollegeData {
    name;
    constructor(cName) {
        this.name = cName;
    }
    displayTeachersName() {
        console.log("anil", "sunil", "rahul");
    }
    getStudentList() {
        return ["anil", "sunil", "rahul"];
    }
}
var college1 = new CollegeData("IIT College");
console.log(college1.getStudentList());
export {};
