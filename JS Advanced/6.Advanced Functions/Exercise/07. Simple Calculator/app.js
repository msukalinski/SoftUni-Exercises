function calculator() {
    return {
        init: (num1, num2, result) => {
            num1Element = document.getElementById('num1');
            num2Element = document.getElementById('num2');
            resultElement = document.getElementById('result');
        },
        add: () => {
            resultElement.value = Number(num1Element.value) + Number(num2Element.value);
        },
        subtract: () => {
            resultElement.value = Number(num1Element.value) - Number(num2Element.value);
        }
    }
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




