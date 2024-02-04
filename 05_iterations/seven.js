const okNumbers = [1, 3, 2, 4, 5, 6, 7,]

// let newNums = okNumbers.map((num)=> num + 10)

newNums = okNumbers

//concept of chaining

   .map((num)=> num*2)
   .map((num) => num+2)  //first result will pass to second result
   .filter((num) => num >= 40)

console.log(newNums);