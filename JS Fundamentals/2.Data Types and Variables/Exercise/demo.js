function demo(num1, operator, num2) {
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    switch (operator) {
        case '+':
            return (sum(num1, num2)).toFixed(2);
        case '-':
            return (subtract(num1, num2)).toFixed(2);
        case '*':
            return (multiply(num1, num2)).toFixed(2);
        case '/':
            return (divide(num1, num2)).toFixed(2);
    }
}
let result = demo (25.5, '+', 3);
console.log(result);