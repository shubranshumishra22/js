// let coding = ["js", "ruby", "java", "python", "cpp"]

// let languages = coding.forEach((item) => {
//     // console.log(item);
//     return item  //returning is important, but for each cannot return
// })  

// console.log(languages);

//filter automatically calls back or returns, but there is a need of condition


let nums = [4, 5, 6, 8, 7, 9, 10]

// newNum = nums.filter((num) => num>4)
// console.log(newNum);

// newNum = nums.filter((num) => {
//     return num>4  //now as you put curly brackets here you need to write return, to write after scope (in global scope)
//    //**concept of scope
// }
// )

//for each

// newNum = []

// nums.forEach((numbers)=>{
//     if (numbers>4){
//         newNum.push(numbers)
//         //pushing will push your 'numbers', no need of console.log

//     }
// })

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let userBooks = books.filter((bk)=>{
//     if (bk.genre == 'Science'){
//         console.log(bk);
    
//     } else {
//         console.log("Book not available");
//     }
//     return bk;
// })
//too comples code

let userBooks = books.filter((bk) => bk.genre === 'History')

console.log(userBooks);

userBooks = books.filter((bk) => {return bk.publish >= 2000})
 //the reason we didn't use let it bc we are overwriting on "userBooks"
 //if "{}" user then we also need to return the function to print outside the scope
 
console.log(userBooks);


 