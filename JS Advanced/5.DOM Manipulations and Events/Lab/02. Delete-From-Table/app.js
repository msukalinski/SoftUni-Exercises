// function deleteByEmail() {
//     const inputElement = document.querySelector('input[name=email]');
//     const resultElement = document.getElementById('result');
//     const rowsElements = document.querySelectorAll('#customers tbody tr');

//     const resultRow = Array.from(rowsElements)
//     .find(tr => tr.getElementsByTagName('td')[1].textContent === inputElement.value);

//     if (resultRow){
//         resultRow.remove();
//         resultElement.textContent = 'Deleted.';
//     }else{
//         resultElement.textContent = 'Not found.';
//     }
//     inputElement.value = '';
// }

function deleteByEmail() {
    const resultElement = document.getElementById('result');
    const inputElement = document.querySelector('input[name=email]');
    const rowsElements = document.querySelectorAll('#customers tbody tr');
    // console.log(rowsElements.textContent);
    const resultRow = Array.from(rowsElements)
    .find(row => row.querySelector('td:nth-child(2)').textContent === inputElement.value);
    
        if (resultRow){
            resultRow.remove();
            resultElement.textContent = 'Deleted.';
        }else{
            resultElement.textContent = 'Not found.'
        }
}



// function deleteByEmail() {
//     // Select elements
//     const resultElement = document.getElementById('result');
//     const inputElement = document.querySelector('input[name=email]');

//     // Select all rows
//     const trElements = document.querySelectorAll('#customers tbody tr');

//     // Find matching row
//     const resultRow = Array.from(trElements)
//         .find(tr => tr.getElementsByTagName('td')[1].textContent === inputElement.value);

//     // Remove row and append result
//     if (resultRow) {
//         resultRow.remove();
//         resultElement.textContent = 'Deleted.';
//     } else {
//         resultElement.textContent = 'Not found.';
//     }
    
//     // Clean up
//     inputElement.value = '';
// }