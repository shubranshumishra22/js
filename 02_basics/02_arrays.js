// push and concat = push will show elements in the the type of datatype it is before while concat show add all together
let nick_name = ["om", "hariom", "shub"]
let off_name = ["shubranshu", "prince", "shekhar"]

off_name.push(nick_name)
//console.log(off_name)

let newarr = off_name.concat(nick_name) //new variable 
//console.log(newarr)

//spread
let allname = [...nick_name, ...off_name]
//console.log(allname)

//flat = to show all the array inside array as a single array but define depth or no. of brackets to remove by writing in()

//console.log(Array.isArray("Shub"))
//console.log(Array.from("Shub"))  //to convert to array
//console.log(Array.from({name : "shub"})) //#imp have to specify whther keys or values needs to be converted

let score1 = 100
let score2 = 200
let score3 = 250

console.log(Array.of(score1, score2, score3))