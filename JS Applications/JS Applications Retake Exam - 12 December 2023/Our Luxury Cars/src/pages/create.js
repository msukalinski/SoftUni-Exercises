import { html } from '../../node_modules/lit-html/lit-html.js';
import { submitHandler } from '../utils/utility.js';
import * as cardService from '../services/cardService.js';

const createTemplate = (onCreate) => html`
    <section id="create">
        <div class="form form-auto">
          <h2>Share Your Car</h2>
          <form class="create-form" @submit="${submitHandler(onCreate)}">
            <input type="text" name="model" id="model" placeholder="Model"/>
            <input
              type="text"
              name="imageUrl"
              id="car-image"
              placeholder="Your Car Image URL"
            />
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price in Euro"
            />
            <input
              type="number"
              name="weight"
              id="weight"
              placeholder="Weight in Kg"
            />
            <input
              type="text"
              name="speed"
              id="speed"
              placeholder="Top Speed in Kmh"
            />
            <textarea
              id="about"
              name="about"
              placeholder="More About The Car"
              rows="10"
              cols="50"
            ></textarea>
            <button type="submit">Add</button>
          </form>
        </div>
    </section>
`;

export const createHandler = (ctx) => {
    const onCreate = (data, form) => {
        if (Object.values(data).some(field => !field)) {
            return alert('All fields are required!');
        }

        const { model, imageUrl, price, weight, speed, about } = data;

        cardService.create({ model, imageUrl, price, weight, speed, about })
            .then(() => ctx.page.redirect('/dashboard'));
    }

    ctx.render(createTemplate(onCreate));
}