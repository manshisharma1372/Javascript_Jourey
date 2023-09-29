
//use const and let always
const accountId= 155
let accountEmail="manshisharma1372@gmail.com"

/* prefer not to use var because of issue in block scope and functional scope */
var accountPassword="12345"

//it is also possible but never use it
accountCity="Jaipur"

let accountState; // this will give val undefined

//  accountId=2;  -- cannot change const var

accountEmail="mannu5470@gmail.com"
accountPassword="212121"
accountCity="mathura"

// console.log(accountId);

//to print all details in table form
console.table([accountId,accountEmail, accountPassword, accountCity,accountState])

