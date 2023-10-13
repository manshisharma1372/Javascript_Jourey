const user={
    username:"manshi",
    price:99,

    welcomeMsg: function () {
        console.log(`${this.username}, welcome to website`);
       // console.log(this); //{ username: 'manshi', price: 99, welcomeMsg: [Function: welcomeMsg] }
    }


}
// this=> to refer current context

user.welcomeMsg() //manshi, welcome to website

user.username="mannu"
user.welcomeMsg() //mannu, welcome to website as context is chnged to mannu

console.log(this); // {} =>node env mai this refer to empty obj
// on browser we get window


//************************************ARROW FUNC*********************************** */


function chai() {

    let username="mannu"
    console.log(this.username); // undefined cannot use 'this' inside functions
    
}

chai()


const chai1= function () {
    let username="hitesh"
    console.log(this.username)

}

//converting above function to arrow func

const chai2= () => {
    let username="hitesh"
    console.log(this.username)   //undefined
    console.log(this); //{}
}

//pure arrow func

const addTwo=(num1,num2)=>{
    return num1+num2
}

console.log(addTwo(1,2)); //3

//implicit return

const addTwo1=(num1,num2)=> num1+num2
console.log(addTwo1(1,2)); //3


const addTwo2=(num1,num2)=> (num1+num2)
console.log(addTwo2(1,2)); //3

const addTwo3=(num1,num2)=> ({username:"manshi"})
console.log(addTwo3()); //{ username: 'manshi' }


//const myarr=[2,4,5,8,9]

//myarr.forEach(()=>())


