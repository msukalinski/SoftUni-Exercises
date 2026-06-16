function demo(a, b, operator) {
    if (operator === '+') {
        console.log(a + b);
    } else if (operator === '-') {
        console.log(a - b);
    } else if (operator === '*') {
        console.log(a * b);
    } else if (operator === '/') {
        console.log(a / b);
    } else if (operator === '%') {
        console.log(a % b);
    } else if (operator === '**') {
        console.log(a ** b);
    }
}
demo(5)
demo('name')