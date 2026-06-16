function demo(arr) {
    const target = arr[0].reduce((sum, num) => sum + num, 0);

    for (let row of arr) {
        const rowSum = row.reduce((sum, num) => sum + num, 0);
        if (rowSum !== target){
            return false;
        }
    }

    for (let col = 0; col < arr[0].length; col++){
        let colSum = 0;
        for (let row = 0; row < arr.length; row++){
            colSum += arr[col][row];
        }
        if (colSum !== target){
            return false;
        }
    }
    return true;
}
demo([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);


// function demo (matrix){
//     let totalSum = matrix[0].reduce((a,b) => a + b, 0);

//     for (let row = 0; row < matrix.length; row++){
//         let rowSum = 0;
//         let colSum = 0;
//         for (let col = 0; com < matrix.length; col++){
//             rowSum += matrix[col][row];
//             col += matrix[row][col];
//         }
//         if (totalSum !== rowSum || totalSum !== colSum){
//             return false;
//         }
//     }
//     return true;
// }