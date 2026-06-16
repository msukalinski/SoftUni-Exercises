function sumOrSubstract (arr){
    let oldSum = 0;
    for (const num of arr){
        oldSum += num;
    }
    let newSum = 0;
    for (let index = 0; index < arr.length; index++){
        if (arr[index] % 2 === 0){
            arr[index] += index;
        }else{
            arr[index] -= index;
        }
    }
    for (const newNum of arr){
        newSum += newNum;
    }
    console.log(arr);
    console.log(oldSum);
    console.log(newSum);
}
sumOrSubstract ([5, 15, 23, 56, 35])