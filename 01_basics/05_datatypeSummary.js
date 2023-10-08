
// Data type => primitive & non primitive datatype

//PRIMITIVE => call by value
/*

string,number,boolean,null,undefined,symbol, big int, 

*/

//note: js is dynamically typed language
const score=100
const scoreVal=100.3 //number only

const isloggedin=false //boolean
const outsidetemp=null //null
let useremail; //it has undefined

const id=Symbol('123')
const anotherId= Symbol('123')
//both are unique
console.log(id==anotherId); //false

const bignumber=345895n


//REFERENCE TYPE , non primitive

/*
array, objects, functions

*/
const heros= ["shaktiman","naagraj","doga"] //array

let myobj={
    name:'manshi',
    age:22
} //object

const myfunc=function(){
    console.log("hello world");
}
myfunc()

console.log(typeof outsidetemp); //object
console.log(typeof bignumber); //bigint
console.log(typeof myfunc); //function object
console.log(typeof myobj); //object

