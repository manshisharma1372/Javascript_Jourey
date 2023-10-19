//if

if (true) {
    //this code will be executed
}
if (false) {
    //this code will not be executed
}

const isUserLoggedIn=true
if(isUserLoggedIn){
 console.log("logged in"); //logged in
}
 
const temp=40
if(temp<50){
    console.log("less than 50"); //less than 50
}
else{
    console.log("greater than 50"); //not executed in this case

}


const score=200

if (score>100) {
    const power="fly"
    console.log(`power is ${power}`); //power is fly
}
// console.log(`power is ${power}`); //power is not defined

const balance=1000
if (balance>500) console.log("test"),
console.log("test2"); //test test2 but now do this  
else console.log("not test");


if (balance<500) {
    console.log("less than 500");
}
else if (balance <750) {
    console.log("less than 750");
}
else if (balance<900) {
    console.log("less than 900");
}
else{
    console.log("greater than 900"); //greater than 900
}

const userlog=true
const debitcrd=true
const loggedinfromgoogle=true
const loggedinfromgmail=false
if (userlog && debitcrd) {
    console.log("allow to buy course"); //allow to buy course
}


if (loggedinfromgmail || loggedinfromgoogle) {
    console.log("user logged in"); //user logged in

}

//////////switch/////////////////////////


const month=3
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;


    default:
        break;
} //march

//except default case all cases will be executed thats why we use break here in every case



