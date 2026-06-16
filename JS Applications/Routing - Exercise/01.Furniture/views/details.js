import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { del, get } from '../src/api.js';
import { getUserData } from '../src/utils.js';

const detailsEndpoint = (id) => `data/catalog/${id}`;

const detailsTemp = (furnData, isOwner, userData) => html`
<div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src=".${furnData.img}" />
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${furnData.make}</span></p>
            <p>Model: <span>${furnData.model}</span></p>
            <p>Year: <span>${furnData.year}</span></p>
            <p>Description: <span>${furnData.description}</span></p>
            <p>Price: <span>${furnData.price}</span></p>
            <p>Material: <span>${furnData.material}</span></p>
            <div>
                ${userData && isOwner ? html`<a href="/edit/${furnData._id}" class="btn btn-info">Edit</a>` : ''}
                ${userData && isOwner ? html`<a href=”#” class="btn btn-red" data-id="${furnData._id}" @click="${onDelete}">Delete</a>` : ''}
            </div>
        </div>
</div>
`;

function renderDetails(ctx) {
    get(detailsEndpoint(ctx.params.detailsId))
        .then(furnData => {
            if (furnData) {
                const userData = getUserData();
                const isOwner = userData?._id === furnData._ownerId;

                render(detailsTemp(furnData, isOwner, userData), document.querySelector('.container'));
            }
        });
}

function onDelete(e) {
    e.preventDefault();

    const currentPostId = e.currentTarget.dataset.id;

    if (confirm('Are you sure?')) {
        del(detailsEndpoint(currentPostId));
        page.redirect('/');
    }
}

export { renderDetails };