let firarr = [1, 3, 5, 7]
//console.log(firarr[2])

//Array methods

//firarr.push(5)
//console.log(firarr)
//firarr.pop() //delete the last elements

//firarr.shift()  normal right shift
//firarr.unshift(9) print 9 to the left of firarr
//console.log(firarr)

//console.log(firarr.includes(3))
//console.log(firarr.indexOf(3))

//let newArr = firarr.join  prints array as string
//console.log(newArr)

//slice and splice**

//slice doesn't manupulate the orginal one, while splice does
//console.log("A", firarr)
let secarr = firarr.slice(0,3)
//console.log("B", secarr)
//console.log(firarr) //no change in the main array

let thirdarr = firarr.splice(0,3)
//console.log("C", firarr)
//console.log(thirdarr) //change in the main array


