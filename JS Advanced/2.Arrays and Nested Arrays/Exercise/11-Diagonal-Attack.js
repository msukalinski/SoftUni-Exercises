function demo(arr) {
    let matrix = arr.map(row => row.split(' ').map(Number));
    let size = matrix.length;

    let mainDiagonalSum = 0;
    let secondaDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaDiagonalSum += matrix[i][matrix.length - 1 - i];
    }

    if (mainDiagonalSum === secondaDiagonalSum) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (i !== j && i !== size - 1 - j) {
                    matrix[i][j] = mainDiagonalSum;
                }
            }
        }
    }
    matrix.forEach(row => console.log(row.join(' ')));
}
demo(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);