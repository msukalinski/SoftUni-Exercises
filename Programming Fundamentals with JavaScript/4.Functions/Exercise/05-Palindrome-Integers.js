function palindromeIntegers (arr){
    function isPalindrome (n){
        let reversedN = n.toString().split('').reverse().join('');
        return Number (reversedN) === n ? true : false;
    }
    let printLines = '';
    for (const n of arr) {
        printLines += isPalindrome(n) + '\n';
    }
    return printLines;
}
let result = palindromeIntegers ([123, 321, 323, 1221]);
console.log(result);