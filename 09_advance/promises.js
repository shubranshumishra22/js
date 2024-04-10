const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //DB calls, crypto
    setTimeout(function(){
        console.log('Asysnc task done');
        resolve() //connecting resolve to .then
    },100)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('asysnc task two');
        resolve()
    },5000)  
}).then(function(){
    console.log("async 2 resolved");
})

//dealing with data
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'shub22', phone :"899"})
    },5000)
})

promiseThree.then(function(user){ //user is the data taken from resolve function here username etc
    console.log(user); 
})


//accessing a particular thing from an API

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true   //also put false and check
        if(!error){
            resolve({username:"shub", name : "shubranshu"})
        }else{
            reject('Error: Something wrong')
        }
    },5000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username  
}).then((myusername)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("the promise is either resolve or rejected"))

//
const promiseFive = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true   //also put false and check
        if(!error){
            resolve({username:"shub", pass : "123"})
        }else{
            reject('Error: JS wrong')
        }
},5000)
})

// alternative method
async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);

    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

//fetch using try-catch

// async function getAllUsers(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//   } catch (error) {
//     console.log("Error: ", error);
//   }  
// }

// getAllUsers()


//fetch using then and catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((resposnse) => {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => {
    console.log("Error found", error);
})
