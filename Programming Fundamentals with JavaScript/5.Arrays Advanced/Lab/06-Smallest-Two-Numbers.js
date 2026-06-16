function smallestNums (arr){
    let sequance = arr.sort((a, b) => {
    return a - b
    });
    let result = sequance
    .slice(0, 2)
    .join(' ');
    console.log(result);
}
smallestNums ([30, 15, 50, 5])