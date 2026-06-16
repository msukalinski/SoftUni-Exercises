function demo(arr) {
    let result = [];
    let sorted = arr.sort((a, b) => a - b);
    
    while (sorted.length !== 0){
        result.push(sorted.shift());
        result.push(sorted.pop());
    }
    // console.log(result);
    return result;
}
demo([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);