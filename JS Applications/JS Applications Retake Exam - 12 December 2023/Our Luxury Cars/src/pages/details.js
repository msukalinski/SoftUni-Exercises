import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as cardService from '../services/cardService.js';

const editAndDeleteTemplate = (carId) => html`
    <div id="action-buttons">
        <a href="/edit/${carId}" id="edit-btn">Edit</a>
        <a href="/delete/${carId}" id="delete-btn">Delete</a>
    </div>
`;


const detailsTemplate = (carInfo, isOwner) => html`
    <section id="details">
        <div id="details-wrapper">
          <img id="details-img" src="${carInfo.imageUrl}" alt="example1" />
          <p id="details-title">${carInfo.model}</p>
          <div id="info-wrapper">
            <div id="details-description">
              <p class="price">Price: €${carInfo.price}</p>
              <p class="weight">Weight: ${carInfo.weight} kg</p>
              <p class="top-speed">Top Speed: ${carInfo.speed} kph</p>
              <p id="car-description">${carInfo.about}</p>
            </div>
            ${isOwner ? editAndDeleteTemplate(carInfo._id) : nothing}
          </div>
        </div>
    </section>
`;

export const detailsHandler = (ctx) => {
    cardService.getOne(ctx.params.carId)
        .then(carInfo => {
            const isOwner = ctx.user?._id === carInfo._ownerId;

            ctx.render(detailsTemplate(carInfo, isOwner));
        })
}