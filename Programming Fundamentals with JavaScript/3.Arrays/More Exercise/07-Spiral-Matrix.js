function demo(rows, cols) {
    let matrix = new Array(rows).fill().map(() => new Array(cols).fill(0));

    let num = 1;
    let top = 0, bottom = rows - 1, left = 0, right = cols - 1;

    while (top <= bottom && left <= right){
        for (let i = left; i <= right; i++){
            matrix[top][i] = num++;
        }
        top++;

        for (let i = top; i <= bottom; i++){
            matrix[i][right] = num++;
        }
        right--;

        for (let i = right; i >= left; i--){
            matrix[bottom][i] = num++;
        }
        bottom--;

        for (let i = bottom; i >= top; i--){
            matrix[i][left] = num++;
        }
        left++;
    }
    // console.log(top);
    // console.log(bottom);
    // console.log(left);
    // console.log(right);
    console.table(matrix);
    matrix.forEach(element => console.log(element.join(' ')));
}
demo(5, 5);