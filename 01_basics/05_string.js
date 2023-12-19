const name = "shubranshu"
const dept = "ece" 

//console.log('hello my name is ${name} and im from ${dept} department');

let myName = "  shub  "
//console.log(myName.indexOf('s'))

let newName = myName.slice(1,3)
//console.log(newName)

let altName = myName.substring(0, 2)
//console.log(altName)
//console.log(altName.trim())

const url = "https://shubranshu.mishra22%20"

console .log(url.replace('%20', '-'))
console .log(url.includes("shubranshu")) //to check value is there or not