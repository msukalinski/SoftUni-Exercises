function sortNums (num1, num2, num3){
    let arr = [];
    arr.push(num1, num2, num3);
    arr.sort().reverse();
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    };

    
    // let nums = [a, b, c];
    // nums.sort((x, y) => y - x);
    // nums.forEach(num => console.log(num));
}
sortNums (-2, 1, 3)