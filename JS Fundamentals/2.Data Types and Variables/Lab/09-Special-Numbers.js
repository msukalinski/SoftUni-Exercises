// function specialNums (num){
//     function isSpecial(x){
//         let sumOfDigits = 0;
//         while (x > 0){
//         sumOfDigits += x % 10;
//         x = Math.floor (x / 10);
//         }
//         return sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11;
//     }
//     function printSpecialNumbers(n) {
//         for (let i = 0; i <= n; i++) {
//             const special = isSpecial(i);
//             console.log(`${i} -> ${special}`);
//         }
//     }
//     let result1 = isSpecial (num);
//     let result2 = printSpecialNumbers (result1);
//     console.log(result1);
// }
// specialNums (15)

function demo(n) {
    for (let i = 1; i <= n; i++) {
        let sumOfDigits = 0;
        let number = i;

        while (number > 0) {
            sumOfDigits += number % 10;
            number = Math.floor(number / 10)
        }
        if (sumOfDigits == 5 || sumOfDigits == 7 || sumOfDigits == 11){
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        }
    }
}
// demo(15)
demo(20)