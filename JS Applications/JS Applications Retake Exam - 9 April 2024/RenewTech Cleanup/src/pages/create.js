import { html } from '../../node_modules/lit-html/lit-html.js';
import { submitHandler } from '../util/utility.js';
import * as solutionService from '../services/solutionService.js';

const createTemplate = (onCreate) => html`
<section id="create">
    <div class="form">
        <img class="border" src="./images/border.png" alt="" />
        <h2>Add Solution</h2>
        <form class="create-form" @submit="${submitHandler(onCreate)}">
            <input type="text" name="type" id="type" placeholder="Solution Type" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
            <textarea id="more-info" name="more-info" placeholder="more Info" rows="2" cols="10"></textarea>
            <button type="submit">Add Solution</button>
        </form>
    </div>
</section>
`;

const inputFields = [
    'type',
    'image-url',
    'description',
    'more-info'
];

export const createView = (ctx) => {
    const onCreate = (data, form) => {

        if (inputFields.some(fieldName => !data[fieldName])) {
            return alert('All fields are required!');
        }

        const { type, ['image-url']: imageUrl, description, ['more-info']: learnMore } = data;

        solutionService.post({ type, imageUrl, description, learnMore })
            .then(() => {
                ctx.page.redirect('/dashboard');
            });
    }
    
    ctx.render(createTemplate(onCreate));
}