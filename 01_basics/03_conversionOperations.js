
let score=33

let score2="33"

console.log(typeof(score));  //number
console.log(typeof(score2));  //string

let valInNumber= Number(score2)
console.log(typeof(valInNumber)); //again typecasted to number only

let str="33abs"
let valofStr=Number(str)
console.log(valofStr); //NaN not a number

let a=null
let ans=Number(a)
console.log(ans); //0

let b=undefined
let ans2=Number(b)
console.log(ans2); //NaN

let bl=true
let ans3=Number(bl)
console.log(ans3); //1 for true  0 for false

/* NOTES

"33" => 33
"33abc" => NaN
true =>1;  false=0


*/

let isloggedIn=1

let booleanIsLoggedIn=Boolean(isloggedIn)
console.log(booleanIsLoggedIn); //true for 1 and false for 0

let emp=""
let booleanemp=Boolean(emp)
console.log(booleanemp); //false

let notEmpty="12345"
let booleanntemp=Boolean(notEmpty);
console.log(booleanntemp); //anything other than 0 are true

/* note
1 => true; 0=>false
""=>false
"manshi" => true
*/

let someNumber=33

let stringnum=String(someNumber)
console.log(stringnum); //33
console.log(typeof(stringnum)); //type string

//************************Operations***************************************/

let value=3
let negvalue=-value
console.log(negvalue); //-3

console.log(2+2);
console.log(2-2);
console.log(2*2)
console.log(2**3);
console.log(2/3);
console.log(2%3);


let str1="hello"
let str2="world"

let str3= str1 + str2
console.log(str3); //helloworld

console.log ("1"+2); //12  string first so sbhi ko string treat krna h
console.log(1+"2"); //12
console.log("1"+2+2); //122 
console.log(1+2+"2"); //32 ?? numeric first so treat it as number only

console.log(true); //true
console.log(+true); //1
// console.log(true+); error
console.log(+""); //0

let num1,num2,num3

num1=num2=num3=2 + 2
console.log(num1); //4

let gameCounter=100
gameCounter++;
console.log(gameCounter); //101

++gameCounter;
console.log(gameCounter); //102
   
