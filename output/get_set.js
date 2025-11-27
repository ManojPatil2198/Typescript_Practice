class EmpInfo {
    _name = "manoj";
    _email = "manoj@example.com";
    get name() {
        return "MR." + this._name;
    }
    set email(val) {
        this._email = "emp" + val;
    }
}
var emp1 = new EmpInfo();
emp1.email = "example.com";
console.log(emp1._email);
export {};
