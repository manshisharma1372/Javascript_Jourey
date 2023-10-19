//loop

//for

for (let index = 0; index < 10; index++) {
    const element = index
    console.log(element); //012345 5 is best 6789     
    if (element==5) {
        console.log("5 is best");
    }
}

for (let i = 0; i <= 5; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 0; j < 5; j++) {
        console.log(`inner loop val ${j} and outer loop ${i}`);
        
    }
   
}

let arr=["manshi","mannu","mona"]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element); //manshi mannu mona
    
}

//break and continue

for (let u = 0; u < 20; u++) {

    if(u==5){
        break
    }
    console.log(`val of i ${u}`);
    /*val of i 0
val of i 1
val of i 2
val of i 3
val of i 4
  */  
}

for (let u = 0; u < 7; u++) {

    if(u==5){
        continue //skip 5   
    }
    console.log(`val of i ${u}`);
}
/*
val of i 0
val of i 1
val of i 2
val of i 3
val of i 4
val of i 6
*/






