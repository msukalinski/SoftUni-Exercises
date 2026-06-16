import { html } from '../../node_modules/lit-html/lit-html.js';

import { showTemplate } from "./partials/catalog.js";
import { submitHandler } from "../services/utils.js";

const noContent = () => html`
    <p class="no-result">There is no TV show with this title</p>
`;

export const searchTemplate = (onSearch, shows) => html`
<section id="search">
  <div class="form">
    <h2>Search</h2>
    <form class="search-form" @submit="${submitHandler(onSearch)}">
      <input type="text" name="search" id="search-input" />
      <button class="button-list">Search</button>
    </form>
  </div>
  <h4>Results:</h4>
  <div class="search-result">
    ${shows && shows.length ? shows.map(show => html`${showTemplate(show)}`) : noContent()}
  </div>
</section>
`;