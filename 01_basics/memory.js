//stack = copy, heap = reference 
let name = "shub"
let newname = name
newname = "om"
console.log(name)
console.log(newname)

let userOne = {
    email : "shub@gmail.com"

}
let userTwo = userOne

userTwo.email = "om.gmail.com"
console.log(userOne.email)
console.log(userTwo.email)