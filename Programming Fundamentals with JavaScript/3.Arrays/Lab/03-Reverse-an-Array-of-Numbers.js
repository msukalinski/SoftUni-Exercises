function reverseArr(n, arr) {
    let newArr = [];
    let reverse = [];
    for (let index = 0; index < n; index++) {
        newArr.push(arr[index]);
    }
    for (let index = newArr.length - 1; index >= 0; index--) {
        reverse.push(newArr[index]);
    }
    console.log(reverse.join(' '));
}
reverseArr (3, [10, 20, 30, 40, 50])