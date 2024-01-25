//var is not being used because it lacks the concept of "gloabl and loacl scope"
//even being in local it gets applied to the global level 

// if (true) {
//     let a = 10 
//     const b = 20
//     var c = 10 //shouldn't use var
//     //console.log("Inner:", a);
// }
 
//console.log(a)

function one(){
    let username = "shub"
    
    function two(){
        let surname = "mishra"
        //console.log(username;
    }
   //console.log(surname);

   two()

//+++++++interesting++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}
//in the first way the program will get executed even if the console.log is above but it won't be the same for the lower one