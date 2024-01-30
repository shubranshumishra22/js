//for
for (let real_num = 0; real_num < 10; real_num++) {
    const element = real_num;
    //console.log(element);
    
}

// console.log(element); cannot be accessed from outside of loop

for (let i = 1; i <= 10; i++) {
      //console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
      //console.log(`Inner loop value: ${j} and inner loop ${i}`);  
      //console.log(i + '*' + j + '=' +i*j);  
      //+ is just the syntax
      
    }
    
}

let nick_name = ["shub", "om", "prince"]

for (let index = 0; index < nick_name.length; index++) {
    const element = nick_name[index];
    //console.log(element);
}

//break and continue

// for (let index = 1; index <= 20; index++) {
    
//     if(index==5){
//         console.log("detected");
//         break;
//     }
     
//     console.log(`value of i is: ${index}`);
    

// }

//continue

for (let index = 1; index <= 20; index++) {
    
    if(index==5){
        console.log("detected");
        continue;
    }
     
    console.log(`value of i is: ${index}`);
    

}