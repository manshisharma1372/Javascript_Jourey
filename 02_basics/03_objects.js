
// singleton => if obj made by constructor
//literal mai no singleton

//object literals
//key and value //key=>string can be or 0 anything u can give

const mySym=Symbol("key1")
const JsUser={
    name:"Manshi",
    age:18,
    [mySym]:"anime",
    location:"jaipur",
    "full name":"manshi sharma",
    email:"manshi@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email); //print mail
console.log(JsUser["email"]); //print mail

// console.log(JsUser.full name); error
console.log(JsUser["full name"]); //manshi number

console.log(JsUser[mySym]);

JsUser.email="manshimannu@gmail.com"

console.log(JsUser["email"]);
// Object.freeze(JsUser)//now no chnages will done to tht object
JsUser.email="manshimannu5480@gmail.com"
console.log(JsUser["email"]); //no chnges same email manshimannu@gmail.com


JsUser.greeting=function(){
    console.log(`hello mannu, ${this.name}`);
}

console.log(JsUser.greeting); //undefined //function

console.log(JsUser.greeting());



