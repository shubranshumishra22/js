//initiate
//while(condition)
//i++

let num = 0;
while (num<=20) {
    // console.log(num);
    num++
}

//loop in array

let newarr = ["Jha", "Mishra", "Thakur"]

let arr = 0
while (arr < newarr.length){
    //console.log(`Surnames is ${newarr[arr]}`);
    arr = arr+1;
}

//do-while loop

let score = 11;  //in this case one 11 will be printed bc execution is done first then condition is checked, but after 11 there won't be any output

do {
    console.log(`Score is ${score}`);
    score++;
} while (score<=10);