import { html } from '../../node_modules/lit-html/lit-html.js';
import { showTemplate } from './partials/catalog.js';

const noContentTemplate = () => html`
    <h2 id="no-show">No shows Added.</h2>
`;

export const dashboardTemplate = (shows) => html`
<h2>Users Recommendations</h2>
<section id="shows">
    ${shows ?
    shows.map(show => showTemplate(show)) : noContentTemplate()};
</section>
`;