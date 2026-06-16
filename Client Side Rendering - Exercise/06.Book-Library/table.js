import { html, render } from './node_modules/lit-html/lit-html.js';
import { get, post, put } from './api.js';

const endpoints = {
    books: 'jsonstore/collections/books',
}

const tableTemp = () => html`
    <button id="loadBooks" @click="${onLoadAll}">LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
    
    <form @submit="${onSubmit}" id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>

    <form @submit="${onSave}" id="edit-form" style="display:none;">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>
`;

const tableRowTemp = (books) => html`
    ${books.map(book => html`
    <tr data-id="${book[0]}">
        <td>${book[1].title}</td>
        <td>${book[1].author}</td>
        <td>
            <button @click="${onEdit}">Edit</button>
            <button>Delete</button>
        </td>
    </tr>`)}
`;

function onLoadAll(e) {
    const table = e.currentTarget.nextElementSibling;
    const tableBody = table.querySelector('tbody');

    get(endpoints.books)
        .then(books => {
            render(tableRowTemp(Object.entries(books)), tableBody);
        });
}

function onSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);
    const { title, author } = Object.fromEntries(formData);


    if (!title || !author) {
        return alert('All fields are required!');
    }

    post(endpoints.books, { title, author });
    form.reset();
}

function onEdit(e) {
    e.preventDefault();

    const editForm = document.querySelector('#edit-form');

    const tableRow = e.currentTarget.parentNode.parentNode;
    const bookId = tableRow.dataset.id;

    get(`${endpoints.books}/${bookId}`)
        .then(data => {
            editForm.setAttribute('data-id', bookId);
            editForm.querySelector('input[name="title"]').value = data.title;
            editForm.querySelector('input[name="author"]').value = data.author;

            document.querySelector('#add-form').style.display = 'none';
            editForm.style.display = 'block';
        })
}

function onSave(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const bookId = e.currentTarget.dataset.id;

    const formData = new FormData(e.currentTarget);
    const { title, author } = Object.fromEntries(formData);

    put(`${endpoints.books}/${bookId}`, { title, author });
    form.reset();
}

export { tableTemp };