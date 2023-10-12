

function sayMyName() {
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("N");
    console.log("U");
}

sayMyName()

function ADDTWONUMBERS(num1,num2) { //num1 and num2 are called parameters
    console.log(num1+num2);
}

ADDTWONUMBERS(3,4) //7 , 3,4 here are called arguements
ADDTWONUMBERS(3,"4") //34 considered both as string
ADDTWONUMBERS(3,"a") //3a
ADDTWONUMBERS(3,null) //3

const res=ADDTWONUMBERS(4,5) //8
console.log(res); //undefined



function add(num1,num2) {
    let res=num1+num2
    return res
    
}
let ans=add(2,4)
console.log(ans); //6


function add2(num1,num2) {
    return num1+num2
    
}

let ans2= add2(1,1)
console.log(ans2); //2

function userLoginMessage(username="mannu") {
    if(/*username === undefined*/ !username){
        console.log("pls enter valid username");
        return
    }
    return `${username} just logged in`
    
}

let finalans=userLoginMessage("manshi")
console.log(finalans); //manshi just logged in






