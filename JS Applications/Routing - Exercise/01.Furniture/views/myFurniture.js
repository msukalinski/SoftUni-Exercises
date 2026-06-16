import { html, render } from '../node_modules/lit-html/lit-html.js';

import { get } from '../src/api.js';
import { getUserData, updateNav } from '../src/utils.js';

const myFurnEndpoint = (userId) => `data/catalog?where=_ownerId%3D%22${userId}%22`;

const myFurnitureTemp = (furnData) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    <div class="row space-top">
        ${furnData.map(curFurn => html`
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
        </div>`)}
    </div>
`;

function renderMyFurniture() {
    const userData = getUserData();

    get(myFurnEndpoint(userData._id))
        .then(furnData => {
            render(myFurnitureTemp(furnData), document.querySelector('.container'));
        })
        updateNav();
}

export { renderMyFurniture };