import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as cardService from '../services/cardService.js';

const editAndDeleteTemplate = (cardId) => html`
    <div id="action-buttons">
        <a href="/edit/${cardId}" id="edit-btn">Edit</a>
        <a href="/delete/${cardId}" id="delete-btn">Delete</a>
    </div>
`;

const detailsTemplate = (cardInfo, isOwner) => html`
    <section id="details">
        <div id="details-wrapper">
            <div>
                <img id="details-img" src="${cardInfo.imageUrl}" alt="example1" />
                <p id="details-title">${cardInfo.item}</p>
            </div>
            <div id="info-wrapper">
                <div id="details-description">
                    <p class="details-price">Price: €${cardInfo.price}</p>
                    <p class="details-availability">
                        ${cardInfo.availability}
                    </p>
                    <p class="type">Type: ${cardInfo.type}</p>
                    <p id="item-description">
                        ${cardInfo.description}
                    </p>
                </div>
                ${isOwner ? editAndDeleteTemplate(cardInfo._id) : nothing}
            </div>
        </div>
    </section>
`;

export const detailsContent = (ctx) => {
    const userData = ctx.user;

    cardService.getOne(ctx.params.cardId)
        .then(cardInfo => {
            const isOwner = userData?._id === cardInfo._ownerId;

            ctx.render(detailsTemplate(cardInfo, isOwner));
        })
}