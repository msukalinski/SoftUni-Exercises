import { html, render } from '../node_modules/lit-html/lit-html.js';

import { get } from '../src/api.js';
import { activeButton } from '../src/nav.js';
import { updateNav } from '../src/utils.js';

const catalogUrl = 'data/catalog';

const dashboardTemp = (furnData) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        </div>
        ${furnCardTemp(furnData)}
    </div>
`;

const furnCardTemp = (furnData) => html`
    <div class="row space-top">${furnData.map(curFurn => html`
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="${curFurn.img}" />
                    <p>${curFurn.description}</p>
                    <footer>
                        <p>Price: <span>${curFurn.price} $</span></p>
                    </footer>
                    <div>
                        <a href="/details/${curFurn._id}" class="btn btn-info">Details</a>
                    </div>
                </div>
            </div>
        </div>
    `)}</div>
`;

function renderDashboard() {
    get(catalogUrl)
        .then(catalogData => {
            render(dashboardTemp(catalogData), document.querySelector('.container'));
        });

    activeButton('/dashboard');
    updateNav();
}

export { renderDashboard };

