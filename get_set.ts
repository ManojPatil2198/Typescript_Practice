class EmpInfo {
 _name:string="manoj";
  _email:string="manoj@example.com";
  
 get name():string{
     return "MR." + this._name;
 }

 set email (val:string){
     this._email = "emp"+val;
 }

}

var emp1 = new EmpInfo();

emp1.email="example.com";
console.log(emp1._email);