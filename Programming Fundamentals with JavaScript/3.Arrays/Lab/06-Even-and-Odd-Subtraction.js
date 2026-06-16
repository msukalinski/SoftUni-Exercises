function subtraction(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let index = 0; index < arr.length; index++) {
        arr[index] = Number(arr[index]);
    }
    for (let nums of arr) {
        if (nums % 2 === 0) {
            sumEven += nums;
        } else {
            sumOdd += nums;
        }
    }
    let result = sumEven - sumOdd;
    console.log(result);
}
subtraction([3, 5, 7, 9])

// function subtraction (arr){
//     let sumEven = 0;
//     let sumOdd = 0;
//     for (let nums = 0; nums < arr.length; nums++){
//         let num = Number (arr[nums]);
//         if (num % 2 === 0){
//             sumEven += num;
//         }else{
//             sumOdd += num;
//         }
//     }
//     let result = sumEven - sumOdd;
//     console.log(result);
// }


// function demo(arr) {
//     let sumEven = 0;
//     let sumOdd = 0;

//     for (let num of arr){
//         num = Number(num);
//         if (num % 2 == 0){
//             sumEven += num;
//         }else{
//             sumOdd += num
//         }
//     }
//     console.log((sumEven - sumOdd));
// }
// demo(['1','2','3','4','5','6'])
// demo(['2','4','6','8','10'])
// // demo(11)