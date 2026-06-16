import { html, render } from '../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const root = document.querySelector('#allCats');

const cardTemplate = (cats) => html`
    <ul>
    ${cats.map(cat => html`
        <li>
            <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button @click="${onShowClick}" class="showBtn">Show status code</button>
                <div class="status" style="display: none" id="${cat.id}">
                    <h4>Status Code: ${cat.statusCode}</h4>
                    <p>${cat.statusMessage}</p>
                </div>
            </div>
        </li>`)}
    </ul>
`;

function onShowClick(e) {
    e.preventDefault();

    const showButton = e.currentTarget;
    const statusDiv = showButton.nextElementSibling;

    if (statusDiv.style.display === 'none') {
        statusDiv.style.display = 'block';
        showButton.textContent = 'Hide status code';
    } else {
        statusDiv.style.display = 'none';
        showButton.textContent = 'Show status code';
    }
}

render(cardTemplate(cats), root);