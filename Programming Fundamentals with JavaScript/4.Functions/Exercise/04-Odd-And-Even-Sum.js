function sumOddEven (n){
    let digitsArr = splitNumber (n);
    let sums = sumsArr (digitsArr);
    let result = `Odd sum = ${sums[1]}, Even sum = ${sums[0]}`;

    function splitNumber (num){
        return num.toString().split('');
    }
    function sumsArr (arr){
        let even = 0;
        let odd = 0;
        for (let n of arr) {
            n = Number (n);
            if (n % 2 === 0){
                even += n;
            }else{
                odd += n;
            }
        }
        return [even, odd];
    }
    return result;
}
let result = sumOddEven ('1000435');
console.log(result);