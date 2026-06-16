import { requester } from "../api.js";
import { hideContent } from "../utils.js";

const dashboardContent = document.querySelector('#dashboard-holder');

const endpoints = {
    dashboard: 'data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
}

function renderDashboard() {
    hideContent();
    
    dashboardContent.style.display = 'flex';
    dashboardContent.innerHTML = '';

    requester.get(endpoints.dashboard)
        .then(cardsData => {
            if (cardsData) {
                createCard(cardsData);
                return;
            }
            const noIdeas = document.createElement('h1');
            noIdeas.textContent = 'No ideas yet! Be the first one :)';

            dashboardContent.appendChild(noIdeas);
        })
}

function createCard(data) {
    dashboardContent.innerHTML = '';

    data.forEach(currentData => {
        const cardElement = document.createElement('div');
        cardElement.setAttribute('class', 'card overflow-hidden current-card details');
        cardElement.setAttribute('style', 'width: 20rem; height: 18rem;');
        cardElement.setAttribute('data-id', currentData._id);

        cardElement.innerHTML = `
        <div class="card-body">
            <p class="card-text">${currentData.title}</p>
        </div>
        <img class="card-image" src="${currentData.img}" alt="Card image cap">
        <a class="btn" href="/details">Details</a>`;

        dashboardContent.appendChild(cardElement);
    });
}

export { renderDashboard };