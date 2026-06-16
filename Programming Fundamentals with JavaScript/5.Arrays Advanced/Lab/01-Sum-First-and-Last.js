function sumNums (arr){
    let firstNum = Number (arr[0]);
    let lastNum = Number (arr.pop());
    console.log(firstNum + lastNum);
}
sumNums (['20', '30', '40'])