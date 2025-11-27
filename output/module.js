// what is moudle in typescript?
// self-contained block of code that encapsulates related functionalities,
// such as classes, interfaces, functions, and variables.
import { Auth } from "./inheritance.js";
const userInfo = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    password: "securePassword123"
};
class User extends Auth {
}
const user1 = new User();
console.log(user1.login(userInfo.name, userInfo.password));
console.log(userInfo);
