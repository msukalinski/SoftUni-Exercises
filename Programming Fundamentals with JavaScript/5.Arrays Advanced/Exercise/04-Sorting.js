function sorting (arr){
    let sorted = arr.sort((a, b) => a - b);
    let final = [];
    while (sorted.length > 0){
        let start = sorted.pop();
        let end = sorted.shift();
        final.push(start, end)
    }
    console.log(final.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])