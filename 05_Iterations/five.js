/**********************for each loop*********************** */

const coding=["js","java","python","c++","ruby"]

coding.forEach(function (val) { //it accepts call back function only i.e w/o name
    console.log(val);
})
/*
js
java
python
c++
ruby
*/

coding.forEach( (item)=>{
    console.log(item); //same o/p as above
})

function printMe(it) {
    console.log(it);
}

coding.forEach(printMe) //same o/p not calling here just giving reference

coding.forEach((it1,index,arr)=>{
    console.log(it1,index,arr);
})
/*
js 0 [ 'js', 'java', 'python', 'c++', 'ruby' ]
java 1 [ 'js', 'java', 'python', 'c++', 'ruby' ]
python 2 [ 'js', 'java', 'python', 'c++', 'ruby' ]
c++ 3 [ 'js', 'java', 'python', 'c++', 'ruby' ]
ruby 4 [ 'js', 'java', 'python', 'c++', 'ruby' ]
*/




const mycoding=[
    {
        langName:"c++",
        langFileName:"cpp"
    },
    {
        langName:"python",
        langFileName:"py"
    },
    {
        langName:"java",
        langFileName:"java"
    }
]

mycoding.forEach((item)=>{
    console.log(item.langName); //c++ python java

    
})
