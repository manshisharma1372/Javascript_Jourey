
console.log(2 > 1); //true
console.log(2 < 1); //false
console.log(2 >= 1); //true
console.log(2 != 1); //true
console.log(2==1); //false

console.log("2" > 1); //true
console.log("02" >1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null>=0); //true

/* NOTE
reason is that an equity check == and comparisons <,<,>=,<= work differently
comparisons convert null to a number treating it as 0 that's why null>=0 is true and null>0 is false

*/

console.log(undefined==0); //f
console.log(undefined>0); //f
console.log(undefined<0); //f
console.log(undefined>=0); //f

//avoid such conversions and comparisons do clean code

// strict check mean === not only checks val but also its datatype

console.log(1=="1"); //true
console.log(1==="1"); //false as string and number 
