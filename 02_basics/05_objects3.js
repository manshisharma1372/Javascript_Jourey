
//destructuring

const course={
    coursename: "js in hindi",
    price:"9999",
    courseInstructor:"Manshi"
}

const {courseInstructor}= course //lhs=> kya extract krna hai ,,,, rhs=> kaha se extract krna hai

console.log(courseInstructor); //Manshi

const {coursename: name}= course // can refer coursename with name only  so destructure krdi coursename ko just name se
console.log(name);  //js in hindi


/* in react

const navbar=({company}) => {

}

navbar(company="hitesh")

*/

//API
//in json =>like obj { key:val } both key and val are string

/* EXAMPLE
{
    "name":"hitesh",
    "coursename":"js in hindi",
    "price":"free"
}
*/




