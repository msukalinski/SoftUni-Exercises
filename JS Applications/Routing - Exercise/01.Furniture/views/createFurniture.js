import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { post } from '../src/api.js';
import { submitHandler, updateNav } from '../src/utils.js';

const createEndpoint = 'data/catalog';

const createTemp = () => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit="${submitHandler(onCreate)}">
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control" id="new-make" type="text" name="make">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control" id="new-model" type="text" name="model">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control" id="new-year" type="number" name="year">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control" id="new-description" type="text" name="description">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control" id="new-price" type="number" name="price">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control" id="new-image" type="text" name="img">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material">
            </div>
            <input type="submit" class="btn btn-primary" value="Create" />
        </div>
    </div>
</form>
`;

function setValidationClass(form, selector, isValid) {
    const element = form.querySelector(selector);
    if (isValid) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
    } else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
    }
}

const validationRules = [
    {
        field: 'make',
        validate: (value) => value.length >= 4,
        selector: '#new-make'
    },
    {
        field: 'model',
        validate: (value) => value.length >= 4,
        selector: '#new-model'
    },
    {
        field: 'year',
        validate: (value) => value >= 1950 && value <= 2050,
        selector: '#new-year'
    },
    {
        field: 'description',
        validate: (value) => value.length >= 10,
        selector: '#new-description'
    },
    {
        field: 'price',
        validate: (value) => value > 0,
        selector: '#new-price'
    },
    {
        field: 'img',
        validate: (value) => value.trim() !== '',
        selector: '#new-image'
    }
];

function onCreate(data, form) {
    let isValid = true;

    validationRules.forEach(rule => {
        const value = data[rule.field];
        const valid = rule.validate(value);

        setValidationClass(form, rule.selector, valid);

        if (!valid) {
            isValid = false;
        }
    });

    if (isValid) {
        data.year = Number(data.year);
        data.price = Number(data.price);

        post(createEndpoint, data)
            .then(data => {
                if (data) {
                    page.redirect('/');
                }
            });

        form.reset();
    }
}

function renderCreate() {
    render(createTemp(), document.querySelector('.container'));
    updateNav();
}

export { renderCreate };