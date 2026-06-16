function addItem() {
    const textInputElement = document.getElementById('newItemText');
    const valueInputElement = document.getElementById('newItemValue');
    const menuElement = document.getElementById('menu');

    const newOption = document.createElement('option');
    newOption.textContent = `${textInputElement.value} ${valueInputElement.value}`;

    menuElement.appendChild(newOption);

    textInputElement.value = '';
    valueInputElement.value = '';

    // console.log(newOption);
}