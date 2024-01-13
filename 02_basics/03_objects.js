//1.sinleton ex - object.create - constructer and 2.literals
let sym = Symbol("key1")
let User = 

{
    name : "shub", 
    age : 21, 
    [sym] : "mykey1", //important syntax : symbol as key
    email  : "shubranshu@gmail.com"
}
console.log(User["email"])
//for symbol also use [], 
console.log(User[sym])
Object.freeze(User) //User details gets saved
//functions left see lecture at 3:56:00
