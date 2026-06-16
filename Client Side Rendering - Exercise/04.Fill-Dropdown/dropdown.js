import { html, render } from '../node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

const root = document.querySelector('#menu');

const textInput = document.querySelector('#itemText');
const addButton = document.querySelector('input[value="Add"]');

const optionsTemp = (data) => html`
${data.map(option => html`<option value="${option._id}">${option.text}</option>`)}
`;

getAll();

function getAll() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            render(optionsTemp(Object.values(data)), root);
        })
}

addButton.addEventListener('click', addItem);

function addItem(e) {
    e.preventDefault();

    if (!textInput.value) {
        return alert('No input!');
    }

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textInput.value })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            textInput.value = '';
            getAll();
        })
        .catch(e => {
            alert(e.message);
        })
}