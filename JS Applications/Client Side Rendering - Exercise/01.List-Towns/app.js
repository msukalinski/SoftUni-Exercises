import { html, render } from '../node_modules/lit-html/lit-html.js';

const root = document.querySelector('#root');

const form = document.querySelector('form');
form.addEventListener('submit', onLoad);

const townsTemplate = (towns) => html`
    <ul>
    ${towns.map(town => html`<li>${town}</li>`)}
    </ul>
`;

function onLoad(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const { towns } = Object.fromEntries(formData);

    render(townsTemplate(towns.split(', ')), root);
}
