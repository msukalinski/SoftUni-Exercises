function demo(a) {
    let isSame = true;
    let sum = 0;
    let numArr = String(a).split('');
    let firstNum = numArr[0];
    for (let num of numArr){
        sum += Number(num);
        if (Number(firstNum) !== Number(num)){
            isSame = false;
        }
    }
    if (!isSame){
        console.log('false');
        console.log(sum);
    }else{
        console.log('true');
        console.log(sum);
    }
}
demo(2222222)
demo(1234)