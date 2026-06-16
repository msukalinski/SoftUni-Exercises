import { html } from '../../node_modules/lit-html/lit-html.js';
import { submitHandler } from '../services/utils.js';

export const editTemplate = (onEdit, show) => html`
<section id="edit">
  <div class="form">
    <h2>Edit Show</h2>
    <form class="edit-form" @submit="${submitHandler(onEdit)}">
      <input type="text" name="title" id="title" value="${show.title}" placeholder="TV Show title" />
      <input type="text" name="image-url" id="image-url" value="${show.imageUrl}" placeholder="Image URL" />
      <input type="text" name="genre" id="genre" value="${show.genre}" placeholder="Genre" />
      <input type="text" name="country" id="country" value="${show.country}" placeholder="Country" />
      <textarea id="details" name="details" value="" placeholder="Details" rows="2" cols="10">${show.details}</textarea>
      <button type="submit">Edit Show</button>
    </form>
  </div>
</section>
`;