function demo(arr) {
    let width = arr.shift();
    let height = arr.shift();
    let x = arr.shift();
    let y = arr.shift();
    let matrix = [];
    for (let row = 0; row < height; row++){
        matrix[row] = [];
        for (let col = 0; col < width; col++){
            matrix[row][col] = 0;
        }
    }
    //Different way to define a new matrix with new Array
    // let matrix = new Array(rows).fill().map(() => new Array(cols).fill(0));

    for (let row = 0; row < height; row++){
        for (let col = 0; col < width; col++){
            matrix[row][col] = Math.max(Math.abs (row - x), Math.abs (col - y)) + 1;
        }
    }

    // console.table(matrix);
    matrix.forEach(element => console.log(element.join(' ')));
}
demo([5, 5, 2, 2]);