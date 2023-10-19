// for of

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num); // 1 2 3 4 5
}

const greetings="hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}
/*
each char is h
each char is e
each char is l
each char is l
each char is o
each char is  
each char is w
each char is o
each char is r
each char is l
each char is d
*/

//Maps =>key val pairs

const map=new Map()
map.set('IN',"India")
map.set('FR',"France")
map.set('US',"United state of america")

console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'FR' => 'France',
  'US' => 'United state of america'
}*/

for (const [key,value] of map) {
    
    console.log(key,':',value);
}
/*
IN : India
FR : France
US : United state of america*/
















