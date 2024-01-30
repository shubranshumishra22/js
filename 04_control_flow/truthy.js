const username = []
 if(username) {    //here username is not compared with anything bc username is truthy value
   //  console.log("got email");
 }else{
   //  console.log("no email");
 }


//falsy value

// false, 0, NaN, -0, BigInt 0n, "", null, undefined

//aprt from all of these everything is truthy value

// "0", 'false', " ", [], {}, function(){}

//  if(username.length === 0){
//  console.log("ARRAY IS empty");
// }

let emptyobj = {}

if (Object.keys(emptyobj).length){ //converting object into array
  console.log("Object is empty");
}

//false == 0  : true
//false == '  : true
//0 == ''   : true

//Nullish Coalescing Operator(??): null undefined

let val1;
val1 = 5 ?? 10 //safety check used for null and undefined bc sometimes while calling data from database "null" data comes up
//if two values one after other then prefers the first value

//console.log(val1);

//Terniary operator

//condition? true : false

let ice = 90
ice = 90 ? console.log("Purchased") : console.log("Insufficiant balance")
