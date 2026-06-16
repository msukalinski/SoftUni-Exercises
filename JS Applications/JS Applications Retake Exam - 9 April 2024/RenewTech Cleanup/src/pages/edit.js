import { html } from '../../node_modules/lit-html/lit-html.js';
import { submitHandler } from '../util/utility.js';
import * as solutionService from '../services/solutionService.js';

const editTemplate = (solution, onEdit) => html`
<section id="edit">
    <div class="form">
        <img class="border" src="/images/border.png" alt="" />
        <h2>Edit Solution</h2>
        <form class="edit-form" @submit="${submitHandler(onEdit)}">
            <input type="text" name="type" id="type" .value="${solution.type}" placeholder="Solution Type" />
            <input type="text" name="image-url" id="image-url" .value="${solution.imageUrl}" placeholder="Image URL" />
            <textarea id="description" name="description" .value="${solution.description}" placeholder="Description" rows="2" cols="10"></textarea>
            <textarea id="more-info" name="more-info" .value="${solution.learnMore}" placeholder="more Info" rows="2" cols="10"></textarea>
            <button type="submit">Edit</button>
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

export const editView = (ctx) => {
    const solutionId = ctx.params.detailsId;
    
    const onEdit = (data, form) => {
        if (inputFields.some(fieldName => !data[fieldName])) {
            return alert('All fields are required!');
        }

        const { type, ['image-url']: imageUrl, description, ['more-info']: learnMore } = data;

        solutionService.edit(solutionId, { type, imageUrl, description, learnMore })
        .then(() => {
            ctx.page.redirect(`/details/${solutionId}`);
        })
    }

    solutionService.getOne(solutionId)
        .then(solution => {
            ctx.render(editTemplate(solution, onEdit));
        })
}