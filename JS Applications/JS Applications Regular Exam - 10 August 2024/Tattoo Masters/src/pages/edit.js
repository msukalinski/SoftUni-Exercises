import { html } from '../../node_modules/lit-html/lit-html.js';
import { submitHandler } from '../utils/utility.js';
import * as tattooService from '../services/tattooService.js';

const editTemplate = (onEdit, tattooData) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit tattoo</h2>
            <form class="edit-form" @submit="${submitHandler(onEdit)}">
                <input
                  type="text"
                  name="type"
                  id="type"
                  .value="${tattooData.type}"
                  placeholder="Tattoo Type"
                />
                <input
                  type="text"
                  name="image-url"
                  id="image-url"
                  .value="${tattooData.imageUrl}"
                  placeholder="Image URL"
                />
                <textarea
                  id="description"
                  .value="${tattooData.description}"
                  name="description"
                  placeholder="Description"
                  rows="2"
                  cols="10"
                ></textarea>
                <select id="user-type" name="user-type">
                    <option value="" disabled selected>Select your role</option>
                    <option value="Tattoo Artist" ?selected="${tattooData.userType === 'Tattoo Artist'}">Tattoo Artist</option>
                    <option value="Tattoo Enthusiast" ?selected="${tattooData.userType === 'Tattoo Enthusiast'}">Tattoo Enthusiast</option>
                    <option value="First Time in Tattoo" ?selected="${tattooData.userType === 'First Time in Tattoo'}">First Time in Tattoo</option>
                    <option value="Tattoo Collector" ?selected="${tattooData.userType === 'Tattoo Collector'}">Tattoo Collector</option>
                </select>
              <button type="submit">Edit</button>
            </form>
        </div>
    </section>
`;

export const renderEdit = (ctx) => {
    const tattooId = ctx.params.tattooId;

    const onEdit = (data, form) => {
        if (Object.values(data).some(field => !field)) {
            return alert('All fields are required!');
        }

        const { type, ['image-url']: imageUrl, description, ['user-type']: userType } = data;

        tattooService.edit(tattooId, { type, imageUrl, description, userType })
            .then(() => {
                ctx.page.redirect(`/tattoos/${tattooId}/details`);
            })
    }

    tattooService.getOne(tattooId)
        .then(tattooData => {
            ctx.render(editTemplate(onEdit, tattooData));
        })
}