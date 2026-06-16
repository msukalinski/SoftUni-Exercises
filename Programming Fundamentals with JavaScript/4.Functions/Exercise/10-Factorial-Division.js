function factDivision (num1, num2){
    function factorial (num){
        let sum = 1;
        for (let index = num; index > 1; index--){
            sum *= index;
        }
        return sum;
    }
    let result1 = factorial (num1);
    let result2 = factorial (num2);
    let finalResult = result1 / result2;
    console.log(finalResult.toFixed(2));
}
factDivision (6, 2)