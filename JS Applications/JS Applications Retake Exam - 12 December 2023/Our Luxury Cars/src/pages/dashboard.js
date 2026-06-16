import { html } from '../../node_modules/lit-html/lit-html.js';
import * as cardService from '../services/cardService.js';

const cardTemplate = (carData) => html`
    <div class="car">
        <img src="${carData.imageUrl}" alt="example1" />
        <h3 class="model">${carData.model}</h3>
        <div class="specs">
          <p class="price">Price: €${carData.price}</p>
          <p class="weight">Weight: ${carData.weight} kg</p>
          <p class="top-speed">Top Speed: ${carData.speed} kph</p>
        </div>
        <a class="details-btn" href="/details/${carData._id}">More Info</a>
    </div>
`;

const noDataTemplate = () => html`
  <h3 class="nothing">Nothing to see yet</h3>
`;

const dashboardTemplate = (carsData) => html`
    <h3 class="heading">Our Cars</h3>
    <section id="dashboard">
        ${carsData.length ? carsData.map(carData => cardTemplate(carData)) : noDataTemplate()}
    </section>
`;

export const dashboardHandler = (ctx) => {
    cardService.getAll()
        .then(carsData => ctx.render(dashboardTemplate(carsData)))
}