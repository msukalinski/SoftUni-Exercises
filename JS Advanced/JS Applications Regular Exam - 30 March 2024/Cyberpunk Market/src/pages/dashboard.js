import { html } from '../../node_modules/lit-html/lit-html.js';
import * as cardService from '../services/cardService.js';

const cardTemplate = (cardInfo) => html`
    <div class="item">
        <img src="${cardInfo.imageUrl}" alt="example1" />
        <h3 class="model">${cardInfo.item}</h3>
        <div class="item-info">
            <p class="price">Price: €${cardInfo.price}</p>
            <p class="availability">
               ${cardInfo.availability}
            </p>
            <p class="type">Type: ${cardInfo.type}</p>
        </div>
        <a class="details-btn" href="/details/${cardInfo._id}">Uncover More</a>
    </div>
`;

const noCardsTemplate = () => html`
    <h3 class="empty">No Items Yet</h3>
`;

const dashboardTemplate = (allCards) => html`
    <h3 class="heading">Market</h3>
    <section id="dashboard">
        ${allCards.length ? allCards.map(cardInfo => cardTemplate(cardInfo)) : noCardsTemplate()}
    </section>
`;

export const dashboardContent = (ctx) => {
    cardService.getAll()
        .then(allCards => {
            ctx.render(dashboardTemplate(allCards));
        });
}