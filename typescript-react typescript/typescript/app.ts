
let variable = "hi"

let age = 18

let agemytype: number;
agemytype = 22;


let mystring:string
mystring = "hello"


let testbool:boolean
testbool:false


let testStringorNumber: string | number  //union 



//!ARRAY  


let names = ["john","john","john"]

names.push("mike")


let number = [10,20,30]
number.push(204)



let stringarray : string[]
stringarray = ["ba"]


let testnumberarray: number[]
testnumberarray = [10,20,30]


let stringornumberarray: (string | number)[]
stringornumberarray = [1,"to",3]


//!OBJECT

let user ={
    username:"john",
    age:22,
    isadmin:false
}

user.username = "jane"
// user.age = "eighteen" 

let userObject : {
    username:string
    age:number
    isadmin:boolean
}

userObject = {
    username:"john",
    age:23,
    isadmin:false
}



//! ANY TYPE

let testAny:any;

testAny = 12
testAny = "hi"
testAny=true
testAny=[true]



//!FUNCTIONS

let sayHi = ()=>{
    
    console.log("hi,,,");
    
}


let funcReturnString = ():string=>{
    return "devdedev"
}

let multiple = (num:number):number =>{
    return num*2;
}

let sum = (num1:number, num2:number, another?:number) => {
    return num1 + num2;
}
sum(2,3)


let func = (user:{username:string; age:number; phone?:string}) => [
    console.log(user.username),
]



//!TYPE ALIASES

type UserType = {
    username:string;
    age:number;
    phone?:string;
}

let betterFunc = (user:UserType) =>{
    console.log(user.username);
}