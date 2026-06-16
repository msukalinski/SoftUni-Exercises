function addAndSubtract(first, second, third) {
    function sum(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    return subtract(sum(first, second), third)
}
let result = addAndSubtract(23, 6, 10);
console.log(result);