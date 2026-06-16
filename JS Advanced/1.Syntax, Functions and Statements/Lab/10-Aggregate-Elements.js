function demo(arr) {
    let sumFirst = 0;
    let sumSecond = 0;
    let concatSum = '';

    for (let i = 0; i < arr.length; i++){
        const currentNum = arr[i];
        sumFirst += currentNum;
        sumSecond += 1 / currentNum;
        concatSum += currentNum;
    }
    console.log(sumFirst);
    console.log(sumSecond);
    console.log(concatSum);
}
demo([1, 2, 3])
// demo('name')