const tinder = new Object() //sinleton
let User = {  //non sinleton 

} 
let anotherUser = {
    userId : "123ss",
    email : "shubranshu28@gmail.com",
    fullname : {
        firstname : "om",
        middename : "shekhar",
        lastname : "mishra"
    }
}
//console.log(anotherUser)
//console.log(anotherUser.fullname.lastname)

//combining two or more objets

let obj1 = {1: "a", 2:"b"}
let obj2 = {3: "a", 4:"b"}
let obj3 = {5: "a", 6:"b"}
//let obj4 = Object.assign({},obj1,obj2,obj3)
//console.log(obj4) //** imp
//console.log(obj1,obj2,obj3) //not right syntax
 //spread operator same as array

//const obj4 = {...obj1, ...obj2, ...obj3} //best way to do it
//console.log(obj4)

//values coming from database(get all the keys of object)
//console.log(anotherUser)
//console.log(Object.keys(anotherUser)) //give keys in form of array so that can be used in loop in future
//same for values as well
console.log(Object.entries(anotherUser))
console.log(anotherUser.hasOwnProperty('isLogged')) //to check property is there or not
