
// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

//no pollution from global scope
//immediately execute 

/*
function chai() {
    
    console.log("DB connected");
}
chai() //DB connected
*/


(function chai2(){
     console.log("DB connected"); //DB connected
})(); // named IIFE



((name)=>{
    console.log(`db connected again ${name}`); //db connected again manshi
})("manshi")  //unknown IIFE

