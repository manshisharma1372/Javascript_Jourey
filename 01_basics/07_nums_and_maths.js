
const score=400 //Number
console.log(score); //400

const balance=new Number(100)
console.log(balance); //Number:100

console.log(balance.toString().length); //3
console.log(typeof balance); //object

console.log(balance.toFixed(2)); //100.00

const otherNumber=23.8966

console.log(otherNumber.toPrecision(3)); //23.9

const hund=1000000
console.log(hund.toLocaleString()); // 1,000,000 have commas

console.log(hund.toLocaleString('en-IN')); //10,00,000 acc to indian system comma will be provided

//************************MATHS*************************** */

console.log(Math); //object

console.log(Math.abs(-1)); //1
console.log(Math.round(4.3)); //4 regular roundoff\
console.log(Math.ceil(4.2)); //top val 5
console.log(Math.floor(4.9)); // 4

console.log(Math.min(4,3,5,9)); //3
console.log(Math.max(8,9,5,6,4));//9

console.log(Math.random()); //0 to 1
console.log((Math.random() *10 )+1); //to avoid mult with 0

const min=10
const max=20
+ min
console.log(Math.floor(Math.random() * (max-min +1) ) +min );
