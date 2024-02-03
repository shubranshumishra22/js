//loops for arrays

let newArray = ["js", "Java", "Html", "css"]

// newArray.forEach(function (coding) {
//     console.log(coding);
// })

//in arrow function

// newArray.forEach ((lang) => {

//     console.log(lang);
// })

// function printMe(iteam){  //call back with a reference
//     console.log(iteam);
// }

// newArray.forEach(printMe()) //call back

newArray.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

//many objects in array using for each loop



