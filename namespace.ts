namespace UserNameSpace{

 export class Auth{
    login(){
        console.log("user login function");
    } 
}

 export function getList(){
    console.log("list of users");
}
 
    
}
namespace AdminNameSpace{

class Auth{
    login(){
        console.log("user login function");
    } 
}

 function getList(){
    console.log("list of users");
}

}

var user8= new UserNameSpace.Auth()
user8.login()
UserNameSpace.getList()