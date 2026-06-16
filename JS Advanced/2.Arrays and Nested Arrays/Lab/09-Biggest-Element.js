// function demo (arr){
//     let biggestNum = Number.MIN_SAFE_INTEGER;
//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0; j < arr[i].length; j++){
//             if (biggestNum < arr[i][j]){
//                 biggestNum = arr[i][j];
//             }
//         }
//     }
//     // console.log(biggestNum);
//     return biggestNum
// }


function demo(matrix) {
    return(Math.max(...matrix.flat()));
}

console.log(demo([[20, 50, 10], [8, 33, 145]]));