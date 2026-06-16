function demo (arr){
    let main = 0;
    let second = 0;
    for (let i = 0; i < arr.length; i++){
        main += arr[i][i];
        second += arr[arr.length - 1 - i][i];
    }
    
    console.log(`${main} ${second}`);
}
demo ([[3, 5, 17], [-1, 7, 14], [1, -8, 89]])