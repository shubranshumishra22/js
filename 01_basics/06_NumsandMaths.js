 const Id = 600
 //console.log(Id)

 const balance = new Number(500)
 //console.log(balance)

//console.log(balance.toString().length)
//console.log(balance.toFixed(3)) //value will show till the precision of three decimal here

const num = 142.8966
//onsole.log(num.toPrecision(5)) //precised from real and decimal no. both not like toFixed
 
const hund = 1000000
//console.log(hund.toLocaleString('en-In'))

//===========Maths==========//
//console.log(Math)
//console.log(Math.abs(-4))
//console.log(Math.round(5.8))
//console.log(Math.ceil(5.8))
//console.log(Math.floor(5.8))
//console.log(Math.min(5.8,  5, 8, 6))

console.log(Math.random()) //will show any random number O/P bw 0 and 1
console.log((Math.random()*10) + 1 ) //so the random no. have not 0 as O/P

const min = 10
const max= 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
