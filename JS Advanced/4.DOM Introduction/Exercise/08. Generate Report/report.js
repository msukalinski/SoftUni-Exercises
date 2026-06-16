function generateReport() {
    const resultElement = document.querySelector('#output');
    const checkboxesElements = document.querySelectorAll('thead tr th input');
    const rowsElements = document.querySelectorAll('tbody tr');
    const output = [];

    rowsElements.forEach(row => {
        const rowData = {};
        const cells = Array.from(row.children);

        checkboxesElements.forEach((checkbox, index) =>{
            if (checkbox.checked){
                const columnName = checkbox.name;
                const cellValue = cells[index].textContent;
                rowData[columnName] = cellValue;
            }
        });
        if (Object.keys(rowData).length > 0){
            output.push(rowData);
        }
    });
    resultElement.value = JSON.stringify(output, null, 2)
}