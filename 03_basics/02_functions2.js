
function calccartprice(...num1) {
    
    return num1
}

console.log(calccartprice(2)); // [ 2 ]
console.log(calccartprice(200,300,400,500)); //[ 200, 300, 400, 500 ]

//REST OPEARTOR looks same as spread

function calccartprice2(val1,val3,...num1) {
    
    return num1
}
console.log(calccartprice2(200,300,400,500)); //[ 400, 500 ]

const user={
    username:"manshi",
    price:199
}

function handleObj(anyobject) {

    //try to do type checking using if else
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObj(user); //username is manshi and price is 199

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]

}
console.log(myNewArray); //username is hitesh and price is 199