function demo(arr) {
    let counter = 0;
    for (let row = 0; row < arr.length; row++){
        for (let col = 0; col < arr[row].length; col++){
            if (col + 1 < arr[row].length && arr[row][col] == arr[row][col + 1]){
                counter++;
            }
            if (row + 1 < arr.length && arr[row][col] === arr[row + 1][col]){
                counter++;
            }
        }
    }
    return counter
    // console.log(counter);
}
demo([['yes', 'yes', 'yes', 'ho'],
['well', 'done', 'yo', 'ho'],
['well', 'done', 'yo', 'yo']]);