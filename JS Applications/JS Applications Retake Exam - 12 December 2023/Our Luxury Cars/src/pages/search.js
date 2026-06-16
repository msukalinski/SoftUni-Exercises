import { html } from '../../node_modules/lit-html/lit-html.js';
import * as cardService from '../services/cardService.js';

const cardTemplate = (carInfo) => html`
    <div class="car">
        <img src="${carInfo.imageUrl}" alt="example1"/>
        <h3 class="model">${carInfo.model}</h3>
        <a class="details-btn" href="/details/${carInfo._id}">More Info</a>
    </div>
`;

const noResultTemplate = () => html`
    <h2 class="no-avaliable">No result.</h2>
`;

const searchTemplate = (onSearch, carsInfo) => html`
  <section id="search">
    <div class="form">
      <h4>Search</h4>
      <form class="search-form" @submit="${onSearch}">
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    <div class="search-result">
        ${carsInfo && carsInfo.length ? carsInfo.map(carInfo => cardTemplate(carInfo)) : noResultTemplate()}
    </div>
  </section>
`;

export const searchHandler = (ctx) => {
    const onSearch = (e) => {
        e.preventDefault();

        const searchValue = e.currentTarget.querySelector('#search-input').value;

        if (!searchValue) {
            return alert('Search field is empty!');
        }

        const searchQuery = encodeURIComponent(`model LIKE "${searchValue}"`);

        cardService.search(searchQuery)
            .then(carsInfo => {
                ctx.render(searchTemplate(onSearch, carsInfo));
            })
    }
    ctx.render(searchTemplate(onSearch));
}