
const score=400 //Number
console.log(score); //400

const balance=new Number(100)
console.log(balance); //Number:100

console.log(balance.toString().length); //3
console.log(typeof balance); //object

console.log(balance.toFixed(2)); //100.00

const otherNumber=23.8966

console.log(otherNumber.toPrecision(3)); //23.9
