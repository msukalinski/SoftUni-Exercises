function sumEvenNums (arr){
    let sum = 0;
    for (let index = 0; index < arr.length; index++){
        arr[index] = Number (arr[index]);
    }
    for (let num of arr){
        if (num % 2 === 0){
            sum += num;
        }
    }
    console.log(sum);


    // for (let num of arr){
    //     if (Number(num) % 2 == 0){
    //         sum += Number(num);
    //     }
    // }
    // console.log(sum);
}
sumEvenNums (['1','2','3','4','5','6'])
sumEvenNums (['3','5','7','9'])