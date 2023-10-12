var c=300

//scope

if (true) {
    let a= 10
    const b=20
    var c=30
    console.log("inner",a); //10

}

// console.log(a); //10 but we get a not defined
// console.log(b); //20 but we get a not defined
console.log(c); //30 yes 30


function one() {
    const username="manshi"

    function two() {
        const websites="youtube"
        console.log(username); //manshi
    }

    // console.log(websites); //websites is not defined
    two() 
}
one()


if (true) {
    
    const username="manshi"
    if(username === "manshi"){
        const web="youtube"
        console.log(username+web); //manshiyoutube
    }

    //console.log(web); //not defined
}

//console.log(username); //not defined



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

console.log(addone(5)); //6 works fine

function addone(num) {
    return num + 1
  
}

// console.log(addtwo(5)); // ERROR Cannot access 'addtwo' before initialization

const addtwo=function (num) {
    return num+2
    
}

//both are diff


