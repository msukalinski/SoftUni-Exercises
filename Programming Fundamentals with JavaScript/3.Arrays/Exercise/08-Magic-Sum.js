function magicSum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0){
            let prevNum = Number (arr[i - 1])
        for (let j = i; j < arr.length; j++) {
            let curNum = Number (arr[j]);
            let sum = prevNum + curNum;
            if (sum === num) {
                console.log(`${prevNum} ${curNum}`);
                }
            }
        }
    }
}
magicSum ([1, 2, 3, 4, 5, 6], 6)