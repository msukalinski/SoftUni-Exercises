function addItem() {
    const inputElement = document.querySelector('#newItemText');
    const ulElement = document.getElementById('items');
    const liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    ulElement.append(liElement);
    inputElement.value = '';
    inputElement.focus();
}

// function addItem() {
//     const text = document.getElementById('newItemText').value;
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(text));
//     document.getElementById('items').appendChild(li);
//     document.getElementById('newItemText').value = '';
//     document.getElementById('newItemText').focus();
// }

// function addItem() {
//     // Get related elements from DOM
//     const inputElement = document.getElementById('newItemText');
//     const ulElement = document.getElementById('items');

//     // Create new li element
//     const liElement = document.createElement('li');
//     liElement.textContent = inputElement.value;

//     // APpend li element to dom
//     ulElement.append(liElement);

//     // Clean up input
//     inputElement.value = '';

//     // Focus on input
//     inputElement.focus();
// }