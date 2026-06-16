function addItem() {
    const inputElement = document.querySelector('#newItemText');
    const itemListElement = document.querySelector('#items');
    const addButtonElement = document.getElementById('some-button');

    const liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    const deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.textContent = '[Delete]';

    deleteButton.addEventListener('click', (event) => {
        liElement.remove();
    });

    liElement.append(deleteButton);
    itemListElement.append(liElement);

    inputElement.value = '';
    inputElement.focus();
};

// function addItem() {
//     const itemListElement = document.getElementById('items');
//     const newItemInput = document.getElementById('newItemText');

//     // create li elemetn
//     const liElement = document.createElement('li');
//     liElement.textContent = newItemInput.value;

//     // create a element for delete
//     const deleteButton = document.createElement('a');
//     deleteButton.href = '#';
//     deleteButton.textContent = 'Delete';

//     // Add event handler to the delete element
//     deleteButton.addEventListener('click', (event) => {
//         // Delete by reference
//         liElement.remove();

//         // Delete by parent
//         // event.currentTarget.parentElement.remove();
//     });

//     // Append a element to li element
//     liElement.append(deleteButton);

//     // Append li element
//     itemListElement.append(liElement);

//     // Clean up
//     newItemInput.value = '';
// }



// function addItem() {
//     const inputElement = document.getElementById('newItemText');
//     const itemListElement = document.querySelector('#items');

//     const liElement = document.createElement('li');
//     liElement.textContent = inputElement.value;
//     const deleteButton = document.createElement('a');
//     deleteButton.href = '#';
//     deleteButton.textContent = '[Delete]';
//     function deleteFunc (){
//         liElement.remove();
//     }
// deleteButton.addEventListener('click', deleteFunc) ;
//     liElement.append(deleteButton);
//     itemListElement.append(liElement);
//     inputElement.value = '';
//     inputElement.focus();
// };


//extra
// const divElement = document.getElementById('text-block');
// const addButtonElement = document.querySelector('input[type=button][value=Add]');

// divElement.addEventListener('mouseover', colorChangeFunc);
// function colorChangeFunc(e) {
//     const backgroundColor = e.currentTarget.style.backgroundColor;
//     if (backgroundColor == 'cyan') {
//         e.currentTarget.style.backgroundColor = 'white';
//         e.currentTarget.style.color = 'black';
//     } else {
//         e.currentTarget.style.backgroundColor = 'cyan';
//         e.currentTarget.style.color = 'red';
//     }
// }
// addButtonElement.addEventListener('mouseover', mousePointed);
// addButtonElement.addEventListener('mouseout', mouseOut);
// function mousePointed(e) {
//     const currentButtonStyle = e.currentTarget.style;
//     currentButtonStyle.backgroundColor = 'red';
// }
// function mouseOut(e) {
//     const currentButtonStyle = e.currentTarget.style;
//     currentButtonStyle.backgroundColor = '';
// }