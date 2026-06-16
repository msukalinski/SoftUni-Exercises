import { requester } from "../api.js";
import { submitHandler } from "../utils.js";
import { renderDashboard } from "./dashboard.js";

const createContent = document.querySelector('#create-idea');

const createForm = createContent.querySelector('form');
createForm.addEventListener('submit', submitHandler(onCreate));

const endpoints = {
    create: 'data/ideas',
}

function renderCreate() {
    createContent.style.display = 'block';
}

function onCreate(data, form) {
    const { title, description, img } = data;

    if (title.length < 6) {
        return alert('Title must be atleast 6 characters!');
    }

    if (description.length < 10) {
        return alert('Description must be atleast 10 characters!');
    }

    if (img.length < 5) {
        return alert('Image URL must be atleast 5 characters!');
    }

    requester.post(endpoints.create, { title, description, img })
        .then(data => {
            if (data) {
                renderDashboard();
            }
        })
    form.reset();
}

export { renderCreate };