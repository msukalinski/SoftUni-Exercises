function calculator(first, second, operator) {
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    switch (operator) {
        case 'add':
            return add(first, second);
        case 'subtract':
            return subtract(first, second);
        case 'multiply':
            return multiply(first, second);
        case 'divide':
            return divide(first, second)
    }
}
let result = calculator(5, 5, 'subtract');
console.log(result);

// const operations = {
//     multiply: (a, b) => a * b,
//     divide: (a, b) => a / b,
//     add: (a, b) => a + b,
//     subtract: (a, b) => a - b,
// };

// const demo = (num1, num2, operator) => {
//     return operations[operator](num1, num2)
// }

// let result = demo(5, 10, 'multiply');
// console.log(result);