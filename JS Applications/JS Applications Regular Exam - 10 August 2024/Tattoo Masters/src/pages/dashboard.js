import { html } from '../../node_modules/lit-html/lit-html.js';
import * as tattooService from '../services/tattooService.js';

const tattooCardTemplate = (tattooData) => html`
    <div class="tattoo">
        <img src="${tattooData.imageUrl}" alt="example1" />
        <div class="tattoo-info">
            <h3 class="type">${tattooData.type}</h3>
            <span>Uploaded by </span>
            <p class="user-type">${tattooData.userType}</p>
            <a class="details-btn" href="/tattoos/${tattooData._id}/details">Learn More</a>
        </div>
    </div>
`;

const noTattoosTemplate = () => html`
    <h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>
`;

const dashboardTemplate = (tattoosData) => html`
    <h2>Collection</h2>
    <section id="tattoos">
        ${tattoosData.length ? tattoosData.map(tattooData => tattooCardTemplate(tattooData)) : noTattoosTemplate()}
    </section>
`;

export const renderDashboard = (ctx) => {
    tattooService.getAll()
        .then(tattoosData => ctx.render(dashboardTemplate(tattoosData)));
}