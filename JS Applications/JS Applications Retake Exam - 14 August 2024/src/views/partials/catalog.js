import { html } from '../../../node_modules/lit-html/lit-html.js';

export const showTemplate = (show) => html`
<div class="show">
    <img src="${show.imageUrl}" alt="example1" />
    <div class="show">
      <h3 class="title">${show.title}</h3>
      <p class="genre">Genre: ${show.genre}</p>
      <p class="country-of-origin">Country of Origin: ${show.country}</p>
      <a class="details-btn" href="/shows/${show._id}/details">Details</a>
    </div>
</div>
`;