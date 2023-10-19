/*
const myobj={
    'game1':"COD",
    'game2': "BGMI"
}

for (const [key,value] of myobj) {
    console.log(key,":",value);
} //myobj not iterable using this 

*/


//using for in loop

const myobject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    py:"python"
}

for (const key in myobject) {
   console.log(key);   
}
/*
js
cpp
rb
py*/
for (const key in myobject) {
    console.log(`${key} for ${myobject[key]}`);   
 }
 /*
 js for javascript
cpp for c++
rb for ruby
py for python*/




const programming=["js","python","java","c++"]

for (const key in programming) {
    console.log(key); 
    //0
    //1
    //2
    //3

    console.log(programming[key]);

    /*
js
python
java
c++
    */
}





/*
const map=new Map()
map.set('IN',"India")
map.set('FR',"France")
map.set('US',"United state of america")

for (const key in map) {
   console.log(key);
}
*/ // map are not iterable like this







