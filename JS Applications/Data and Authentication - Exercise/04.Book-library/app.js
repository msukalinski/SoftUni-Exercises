const loadBooksButton = document.querySelector('#loadBooks');
const tableBody = document.querySelector('table>tbody');
const [titleInput, authorInput] = document.querySelectorAll('input[type="text"]');
const formElement = document.querySelector('form');
const formHeader = document.querySelector('form>h3');
const submitButton = document.querySelector('form>button');

loadBooksButton.addEventListener('click', onLoadBooksClick);
formElement.addEventListener('submit', onSubmitClick);

const url = 'http://localhost:3030/jsonstore/collections/books';
let isEditMode = false;
let editBookId = '';

function onLoadBooksClick(e) {
    getRequest();
}

function onSubmitClick(e) {
    e.preventDefault();

    const author = authorInput.value.trim();
    const title = titleInput.value.trim();

    if (!author || !title) {
        return;
    }

    const requestOptions = {
        method: isEditMode ? 'PUT' : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ author, title })
    };

    const endpoint = isEditMode ? `${url}/${editBookId}` : url;

    fetch(endpoint, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then(() => {
            formElement.reset();
            formHeader.textContent = 'FORM';
            submitButton.textContent = 'Submit';
            isEditMode = false;
            editBookId = '';
            getRequest();
        })
        .catch(error => {
            alert(error.message);
        });
}

function createTableRow(data) {
    tableBody.innerHTML = '';

    data.forEach(([curBookId, curBook]) => {
        const tableRowElement = document.createElement('tr');
        tableRowElement.id = curBookId;

        const bookNameElement = document.createElement('td');
        bookNameElement.textContent = curBook.title;

        const authorNameElement = document.createElement('td');
        authorNameElement.textContent = curBook.author;

        tableRowElement.appendChild(bookNameElement);
        tableRowElement.appendChild(authorNameElement);
        tableRowElement.appendChild(createButtons(curBookId));

        tableBody.appendChild(tableRowElement);
    });
}

function createButtons(bookId) {
    const buttonsContainer = document.createElement('td');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    editButton.addEventListener('click', () => onEditClick(bookId));
    deleteButton.addEventListener('click', () => onDeleteClick(bookId));

    buttonsContainer.appendChild(editButton);
    buttonsContainer.appendChild(deleteButton);

    return buttonsContainer;
}

function onEditClick(bookId) {
    const bookRow = Array.from(tableBody.querySelectorAll('tr'))
        .find(row => row.id === bookId);

    const bookData = bookRow.querySelectorAll('td');
    const title = bookData[0].textContent;
    const author = bookData[1].textContent;

    formHeader.textContent = 'Edit FORM';
    submitButton.textContent = 'Save';
    isEditMode = true;
    editBookId = bookId;

    titleInput.value = title;
    authorInput.value = author;
}

function onDeleteClick(bookId) {
    fetch(`${url}/${bookId}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then(() => {
            getRequest();
        })
        .catch(error => {
            alert(error.message);
        });
}

function getRequest() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then(data => {
            createTableRow(Object.entries(data));
        })
        .catch(error => {
            alert(error.message);
        });
}