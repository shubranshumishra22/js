// Immediately Invoked Function Expressions (IIFE)
//used to remove Global stage pollution as well as fast or immidiate execution of code
(function chai(){
    console.log(`DB CONNECTED`);

}()); //making it a block also use semicolon is mandatory

//chai()   also can be written as
//()()    //here the first one is the replacement of chai and the second one is as always for values

//writing is arrow function

( (username) => {  //named iife
    console.log(`DB CONNECTED TWO ${username}`);
}

) ("shub22");