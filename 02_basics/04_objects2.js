
//Singleton obj
//const tinderUser= new Object()

//non singleton obj
const tinderUser={}
console.log(tinderUser); //empty obj

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

console.log(tinderUser);

const regularUser={
    email:"some@gmail.com", 
    fullname:{
        usersFullname:{
            firstname:"manshi",
            lastname:"sharma"
        }
    }
}

console.log(regularUser.fullname.usersFullname.firstname);

//combine obj

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"
}

//  const obj3= Object.assign(obj1,obj2)
//console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3= Object.assign({},obj1,obj2) //giving {} so both concat into tht temp obj
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const obj4={...obj1,...obj2}
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//in DB

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {

    },
    {

    }
]
    
console.log(users[0].email);//h@gmail.com

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ] ARRAY OF KEYS
console.log(Object.values(tinderUser)); // [ '123abc', 'sammy', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ] -> Key Value Pairs

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true means yes it has that property





