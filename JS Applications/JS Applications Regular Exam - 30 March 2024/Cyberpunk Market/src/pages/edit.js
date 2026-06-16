import { html } from '../../node_modules/lit-html/lit-html.js';
import * as cardService from '../services/cardService.js';
import { submitHandler } from '../utils/utility.js';
import { notification } from './notify.js';

const editTemplate = (cardInfo, onEdit) => html`
    <section id="edit">
        <div class="form form-item">
            <h2>Edit Your Item</h2>
            <form class="edit-form" @submit="${submitHandler(onEdit)}">
                <input type="text" .value="${cardInfo.item}" name="item" id="item" placeholder="Item" />
                <input type="text" .value="${cardInfo.imageUrl}" name="imageUrl" id="item-image" placeholder="Your item Image URL" />
                <input type="text" .value="${cardInfo.price}" name="price" id="price" placeholder="Price in Euro" />
                <input type="text" .value="${cardInfo.availability}" name="availability" id="availability" placeholder="Availability Information" />
                <input type="text" .value="${cardInfo.type}" name="type" id="type" placeholder="Item Type" />
                <textarea id="description" .value="${cardInfo.description}" name="description" placeholder="More About The Item" rows="10"
                    cols="50"></textarea>
                <button type="submit">Edit</button>
            </form>
        </div>
    </section>
`;

export const editContent = (ctx) => {
    const cardId = ctx.params.cardId;

    const onEdit = (data, form) => {

        if (Object.values(data).some(field => !field)) {
            return notification('All fields are required!');
        }

        const { item, imageUrl, price, availability, type, description } = data;

        cardService.editCard(cardId, { item, imageUrl, price, availability, type, description })
            .then(() => {
                ctx.page.redirect(`/details/${cardId}`);
            });
    }

    cardService.getOne(cardId)
        .then(cardInfo => {
            ctx.render(editTemplate(cardInfo, onEdit));
        })
}