import { html } from '../../node_modules/lit-html/lit-html.js';
import * as cardService from '../services/cardService.js';
import { submitHandler } from '../utils/utility.js';
import { notification } from './notify.js';

const sellTemplate = (onAdd) => html`
    <section id="create">
        <div class="form form-item">
            <h2>Share Your item</h2>
            <form class="create-form" @submit="${submitHandler(onAdd)}">
                <input type="text" name="item" id="item" placeholder="Item" />
                <input type="text" name="imageUrl" id="item-image" placeholder="Your item Image URL" />
                <input type="text" name="price" id="price" placeholder="Price in Euro" />
                <input type="text" name="availability" id="availability" placeholder="Availability Information" />
                <input type="text" name="type" id="type" placeholder="Item Type" />
                <textarea id="description" name="description" placeholder="More About The Item" rows="10"
                    cols="50"></textarea>
                <button type="submit">Add</button>
            </form>
        </div>
    </section>
`;

export const sellContent = (ctx) => {
    const onAdd = (data, form) => {
        if (Object.values(data).some(field => !field)) {
            return notification('All fields are required!');
        }

        const { item, imageUrl, price, availability, type, description } = data;

        cardService.addCard({ item, imageUrl, price, availability, type, description })
            .then(() => {
                ctx.page.redirect('/dashboard');
            });
    }
    ctx.render(sellTemplate(onAdd));
}