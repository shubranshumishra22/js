// let user = {
//     username : "shub",
//     price : 900,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welsome to the website`)

//     }
// }

// user.welcomeMessage("shub")

//browser = window object
//while innode it is an empty object

// function chai(){
//     let username = "shub"
//     console.log(this.username);
// }

// chai()

// let chai = function (){
//         let username = "shub"
//         console.log(this.username);

// }

//applying arrow

// let chai = () => {
//           let username = "shub"
//            console.log(this.username);
// }
//so arrow only applies to object and not in function

// let addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(40, 60))

//implicit return : no paranthesis no curly if curly then use return as well

let addTwo = (num1,num2) => {return num1+num2}
console.log(addTwo(40, 60))
