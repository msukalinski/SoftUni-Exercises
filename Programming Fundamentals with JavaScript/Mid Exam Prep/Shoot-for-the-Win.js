function shootForTheWin(input) {
    let arr = input.shift().split(' ').map(Number);
    // console.log(arr.length);
    for (let token of input) {
        if (token === 'End') {
            break;
        }
        let idx = Number(token);
        if (idx <= arr.length - 1) {
            let current = Number (arr.splice(idx, 1, -1).shift());
            for (let i = 0; i < arr.length; i++){
                if (arr[i] > current && arr[i] !== -1){
                    arr[i] -= current;
                }else if (arr[i] <= current && arr[i] !== -1){
                    arr[i] += current;
                }
            }
        }
    }
    let count = 0;
    for (let num of arr){
        if (num === -1){
            count++;
        }
    }
    console.log(`Shot targets: ${count} -> ${arr.join(' ')}`);
}
shootForTheWin (["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])