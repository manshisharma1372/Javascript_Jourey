//array

const myArr=[0,1,2,3,4,5,true,"mannu"] //any type of data can be given

// array are resizable
console.log(myArr[0]);
//0 based indexing

//array-copy-op => shallow copy=> copy whose properties share the same references

const myHero=["superman","Thor","loki"]

const myArr2= new Array(1,2,3,4)

// Array methods

myArr2.push(6)
myArr2.push(7)

myArr2.pop()
myArr2.unshift(9) //inserted at beginning

myArr2.shift() //pop from front
console.log(myArr2.includes(9)); //false bool

console.log(myArr2.indexOf(9)); // -1 means not present
console.log(myArr2.indexOf(2)); //1 means present at index 1

const newArr= myArr2.join()
console.log(typeof newArr); //string mai bind kr dia h

//SLICE AND SPLICE

console.log("A ", myArr2);
console.log(myArr2); //1,2,3,4,6
const myn1=myArr2.slice(1,3)

const myn2=myArr2.splice(1,3)

console.log("b",myn1); // 2,3 ->range included
console.log("c",myn2); // 2,3,4 ->range not included

//note splice manipulate original array only chnges reflex in org array








