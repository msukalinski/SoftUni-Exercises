function demo(matrix) {
    const sum = arr => arr.reduce((acc, curr) => acc + curr, 0);

    const targetSum = sum (matrix[0]);

    for (let row of matrix){
        if (sum(row) !== targetSum){
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++){
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++){
            colSum += matrix[row][col];
        }
        if (colSum !== targetSum){
            return false;
        }
    }
    return true;
}
console.log(demo([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));