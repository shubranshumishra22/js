//function addThreeNumbers(no1, no2, no3){
    //console.log(no1 + no2 + no3)
//}

function addThreeNumbers(no1, no2, no3){

    // let result = no1 + no2 + no3
    // return result //cannot do anything after return
    //   one more way
    return no1+no2
}
let result = addThreeNumbers(3,4,6) 
//console.log(result)

function loginUserMessage(username){ //if variable vlaue written directly here then later it will be overwritten
    if(!username === undefined){  //"!" works as NOT gate(opposite value output)
        console.log("Please enter your username");
    }
    return //`${username} just logged in`
}

//console.log(loginUserMessage())  //if no value provided in the bracket then the output will show undefined and not null

function calculateCartPrice(val1,val2,...num1){ //rest and spread operator

    return num1
}
//console.log(calculateCartPrice(200,400,500)) //will convert into array

//objects

let user = {
    username : "shub22",
    total_cost : 9000,
}

function handleObject(anyobject){
console.log(`Username is ${user.username} and total amount is ${user.total_cost}`)
}

handleObject(user)