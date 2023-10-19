const userEmail="manshi@gmail.com"

if (userEmail) {
    console.log("got user email"); //got user email
}
else{
    console.log("dont have user email");
}

//if val given then consider it as true

const userE=""

if (userE) {
    console.log("got user email"); 
}
else{
    console.log("dont have user email");//dont have user email as email is empty
}

/*NOTES

//falsy val

false
0
-0
BigInt 0n
""
null
undefined
NaN

rest are truthy
example truthy

true
"0"
'false'
" " //space given
[]
{}
function(){} //empty function


*/

//to check arr is empty or not

let arr=[]
if(arr.length===0){
    console.log("empty"); //empty
}
else{
    console.log("not empty");
}

// to check obj is empty or not

const emptyobj={}

if(Object.keys(emptyobj).length===0){ //gives arr of keys
    console.log("obj is empty");//obj is empty
}

//false ==0 true
//false =="" true
// 0=='' true

//NULLISH COALESCING OPERATOR (??): null undefined

let val1;
val1= 5?? 10
val1=null??10
console.log(val1);//5 , 10 if comes then assign tht else assign null

let val2;
val2=undefined??15
console.log(val2); //15

//ternary operator
// condition? true:false

const iceprice=100
iceprice>90?console.log("greater"):console.log("lesser");//greater as it is true statement



