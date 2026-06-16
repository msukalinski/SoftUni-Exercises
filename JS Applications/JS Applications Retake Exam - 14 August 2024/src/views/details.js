import { html } from '../../node_modules/lit-html/lit-html.js';

const actionButtons = (showId) => html`
<div id="action-buttons">
  <a href="/shows/${showId}/edit" id="edit-btn">Edit</a>
  <a href="/shows/${showId}/delete" id="delete-btn">Delete</a>
</div>
`;

export const detailsTemplate = (show, isOwner) => html`
<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${show.imageUrl}" alt="${show.title}" />
      <div id="details-text">
        <p id="details-title">${show.title}</p>
        <div id="info-wrapper">
          <div id="description">
            <p id="details-description">${show.details}</p>
          </div>
        </div>
        ${isOwner ? actionButtons(show._id) : ''}
      </div>
    </div>
</section>
`;