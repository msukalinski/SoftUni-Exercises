function demo(first, second, operator) {
    let add = (a, b) => a + b; 
    let subtract = (a, b) => a - b; 
    let multiply = (a, b) => a * b; 
    let divide = (a, b) => a / b;
    switch (operator){
        case 'add':
            return add(first, second);
        case 'subtract':
            return subtract (first, second);
        case 'multiply':
            return multiply (first, second);
        case 'divide':
            return divide (first, second);
    }
    
}
let result = demo (5,

    5,
    
    'multiply')
console.log(result);