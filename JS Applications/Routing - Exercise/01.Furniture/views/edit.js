import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { get, put } from '../src/api.js';
import { submitHandler } from '../src/utils.js';

const editEndpoint = (id) => `data/catalog/${id}`;

const editTemp = (furnData) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Edit Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit="${submitHandler(onEdit)}" data-id="${furnData._id}">
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control" id="new-make" type="text" name="make" value="${furnData.make}">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control is-valid" id="new-model" type="text" name="model" value="${furnData.model}">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control is-invalid" id="new-year" type="number" name="year" value="${furnData.year}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control" id="new-description" type="text" name="description" value="${furnData.description}">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control" id="new-price" type="number" name="price" value="${furnData.price}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control" id="new-image" type="text" name="img" value="${furnData.img}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material" value="${furnData.material}">
                </div>
                <input type="submit" class="btn btn-info" value="Edit" />
            </div>
        </div>
    </form>
`;

function renderEdit(ctx) {
    get(editEndpoint(ctx.params.detailsId))
        .then(furnData => {
            if (furnData) {
                render(editTemp(furnData), document.querySelector('.container'));
            }
        })
}

function onEdit(data, form) {
    const { make, model, year, description, price, img } = data;
    const inputFields = [make, model, year, description, price, img];

    if (inputFields.some(field => !field)) {
        return;
    }

    const currentPostId = form.dataset.id;

    put(editEndpoint(currentPostId), data).
        then(data => {
            if (data) {
                page.redirect('/');
            }
        })
}

export { renderEdit };