function sum (num){
    let sum = 0;
    let curNum = 1;
    for (let i = 1; i <= num; i++){
        console.log(curNum);
        sum += curNum;
        curNum += 2;
    }
    console.log(`Sum: ${sum}`);
}
sum (3)