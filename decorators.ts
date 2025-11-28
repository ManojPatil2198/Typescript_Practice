// what is decorators 
// in ts, decorators are a spacial kind of declaration that can be attached to classes,
//methods,properties,or pararmeters to modify their behaviour.

function classLogger(constructor:Function){
    console.log(constructor.name);

}
   function getKeyDetails(target:any,key:any){
    console.log(key)
   }


@classLogger
class CustomMaths{

    @getKeyDetails
    value1:number;
    value2:number;
    constructor(x:number,y:number){
        this.value1=x;
        this.value2=y;
    }
}
 var cm1= new CustomMaths(10,20);
