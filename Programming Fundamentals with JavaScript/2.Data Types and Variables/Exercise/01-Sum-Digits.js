function sumDigits (num){
    let str = num.toString();
    let sum = 0;
    for (let index = 0; index < str.length; index++){
        sum += Number (str[index]);
    }
    console.log(sum);
}
sumDigits (245678)