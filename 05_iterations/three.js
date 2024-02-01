//for of

//kinda array specific loops
//["","", ""]
//[{}, {}, {}]

let arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

// let greetings = "Hello world"
// for (const greet of greetings) {
//     //console.log(`each greet is 
//     ${greet}`);

// }

// Maps

let map = new Map()
map.set('WB' ,  "Kolkata")
map.set('TN' ,  "Chennai")

// console.log(map);  //maps are known for unique values hence vlues cannot be repeated, also order is same

//for of 

for (const [key, value] of map) {  //now we can get both the keys and values 
    //console.log(key, value); 
} 
//here, whole table again gets printed, just to print keys or values we write in [] and then print in (,) form 

//for of in object

let newObject = {
    game1 : "cricket",
    game2 : "football",
    game3 : "hockey",
}

for (const [key, value] of newObject) {
    console.log(key, ": " , value)
}

//object is not iterable in for of loop, there are other ways