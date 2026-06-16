function demo(arr) {
    let [first, second, string] = arr;
    let result = 0;
    let firstNum = first.charCodeAt(0);
    let secondNum = second.charCodeAt(0);


    for (let char of string) {
        let charNum = char.charCodeAt(0);
        if (charNum > firstNum && charNum < secondNum) {
            result += charNum;
        }else if (charNum > secondNum && charNum < firstNum){
            result += charNum;
        }
    }
    console.log(result);
}

demo(['.',

'@',

'dsg12gr5653feee5']);
// demo()