import { requester } from "../api.js";
import { router } from "../router.js";
import { getUserData } from "../utils.js";
import { renderDashboard } from "./dashboard.js";

const detailsContent = document.querySelector('#details');

const dashboardContent = document.querySelector('#dashboard-holder');
dashboardContent.addEventListener('click', onDetails);

const endpoints = {
    details: (id) => `data/ideas/${id}`,
    delete: (id) => `data/ideas/${id}`
}

let ideaId = '';

function onDetails(e) {
    e.preventDefault();

    if (e.target.nodeName === 'A') {
        ideaId = e.target.parentNode.dataset.id;

        const url = new URL(e.target);
        router(url.pathname);
    }
    detailsContent.innerHTML = '';

    requester.get(endpoints.details(ideaId))
        .then(data => {
            detailsContent.replaceChildren(detailsTemp(data));
        })
}

function renderDetails() {
    detailsContent.style.display = 'block';
}

function detailsTemp(data) {
    const fragment = document.createDocumentFragment();

    const img = document.createElement('img');
    img.setAttribute('class', 'det-img');
    img.setAttribute('src', `${data.img}`);

    const description = document.createElement('div');
    description.setAttribute('class', 'desc');
    description.innerHTML = `
        <h2 class="display-5">${data.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${data.description}</p>`;

    const btnHolder = document.createElement('div');
    btnHolder.setAttribute('class', 'text-center');

    const delButton = document.createElement('a');
    delButton.setAttribute('class', 'btn detb');
    delButton.textContent = 'Delete';

    btnHolder.appendChild(delButton);


    fragment.appendChild(img);
    fragment.appendChild(description);

    const userData = getUserData();
    const isOwner = data._ownerId === userData?._id;

    if (isOwner) {
        fragment.appendChild(btnHolder);
    }

    delButton.addEventListener('click', onDelete);

    return fragment
}

function onDelete(e) {
    e.preventDefault();
    requester.del(endpoints.delete(ideaId));
    renderDashboard();
}

export { renderDetails };