
const marvel_heros=["thor","ironman","spiderman"]

const dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros); //array of array created ->problem

//console.log(marvel_heros[3][1]); //flash

combinedarr=marvel_heros.concat(dc_heros) //same array of array ->problem
console.log(combinedarr); //in a single arr

const allNewHeros=[...marvel_heros, ...dc_heros]
console.log(allNewHeros); //get arr combined CALLED SPREAD OPERATOR

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray=another_array.flat(Infinity) //i/p is depth
console.log(realAnotherArray); //gives single arr flattens arr

console.log(Array.isArray("manshi")) //false
console.log(Array.from("manshi")); //make arr of 'm','a','n','s','h','i'

console.log(Array.from({name:"manshi"}));//interesting 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3) ); //[100,200,300]