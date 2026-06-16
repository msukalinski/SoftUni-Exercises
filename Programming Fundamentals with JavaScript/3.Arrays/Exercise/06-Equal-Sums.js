function equalSums (arr){
    let isEqual = false;
    for (let i = 0; i < arr.length; i++){
        let leftSum = 0;
        let rightSum = 0;
        for (let j = i + 1; j < arr.length; j++){
            rightSum += arr[j];
        }
        for (let k = 0; k < i; k++){
            leftSum += arr[k];
        }
        if (leftSum === rightSum){
            isEqual = true;
            console.log(i);
        }
    }
    if (!isEqual){
    console.log('no');
    }
}
equalSums ([1, 2, 3, 3])
equalSums ([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])