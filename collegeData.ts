interface CollegeDataTye {
    name: string;
    displayTeachersName(): void;
    getStudentList(): string[];
}

class CollegeData  implements CollegeDataTye {
    name: string;
    constructor(cName: string) {
        this.name = cName;
     }
    displayTeachersName(): void {
        console.log("anil", "sunil", "rahul");
    }
    getStudentList(): string[] {
        return  ["anil", "sunil", "rahul"];

}
}

 var college1  = new CollegeData("IIT College");

 console.log(college1.getStudentList());