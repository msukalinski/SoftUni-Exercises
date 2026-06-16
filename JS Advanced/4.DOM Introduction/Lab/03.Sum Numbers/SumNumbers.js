// function calc() {
//     const num1Element = document.getElementById('num1');
//     const num2Element = document.getElementById('num2');
//     const sumElement = document.getElementById('sum');

//     let firstNumber = Number(num1Element.value);
//     let secondNumber = Number(num2Element.value);
//     sumElement.value = firstNumber + secondNumber;
// }













function calc(){
    const num1Element = document.getElementById('num1').value;
    const num2Element = document.querySelector('#num2').value;
    const sumElement = document.getElementById('sum');

    sumElement.value = Number(num1Element) + Number(num2Element);
}