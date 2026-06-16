import { html } from '../../node_modules/lit-html/lit-html.js';
import { submitHandler } from '../utils/utility.js';
import * as cardService from '../services/cardService.js';

const editTemplate = (onEdit, carData) => html`
    <section id="edit">
        <div class="form form-auto">
          <h2>Edit Your Car</h2>
          <form class="edit-form" @submit="${submitHandler(onEdit)}">
            <input type="text" name="model" id="model" .value="${carData.model}" placeholder="Model" />
            <input
              type="text"
              name="imageUrl"
              id="car-image"
              .value="${carData.imageUrl}"
              placeholder="Your Car Image URL"
            />
            <input
              type="text"
              name="price"
              id="price"
              .value="${carData.price}"
              placeholder="Price in Euro"
            />
            <input
              type="number"
              name="weight"
              id="weight"
              .value="${carData.weight}"
              placeholder="Weight in Kg"
            />
            <input
              type="text"
              name="speed"
              id="speed"
              .value="${carData.speed}"
              placeholder="Top Speed in Kmh"
            />
            <textarea
              id="about"
              .value="${carData.about}"
              name="about"
              placeholder="More About The Car"
              rows="10"
              cols="50"
            ></textarea>
            <button type="submit">Edit</button>
          </form>
        </div>
    </section>
`;

export const editHandler = (ctx) => {
    const carId = ctx.params.carId;

    const onEdit = (data, form) => {
        if (Object.values(data).some(field => !field)) {
            return alert('All fields are required!');
        }

        const { model, imageUrl, price, weight, speed, about } = data;

        cardService.edit(carId, { model, imageUrl, price, weight, speed, about })
            .then(() => ctx.page.redirect(`/details/${carId}`));
    }

    cardService.getOne(carId)
        .then(carData => ctx.render(editTemplate(onEdit, carData)));

}