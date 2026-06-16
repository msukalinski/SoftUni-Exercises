import { api, endpoints } from "../api.js";
import { renderHome } from "./home.js";

const editSection = document.querySelector('#edit-movie');

const editForm = editSection.querySelector('form');
editForm.addEventListener('submit', onEdit);

function renderEdit() {
    editSection.style.display = 'block';
}

function setFormData(movieData) {
    editForm.setAttribute('data-id', movieData._id);
    
    editSection.querySelector('#title').value = movieData.title
    editSection.querySelector('textarea[name="description"]').value = movieData.description
    editSection.querySelector('#imageUrl').value = movieData.img
}

function onEdit(e) {
    e.preventDefault();

    const formData = new FormData(editForm);
    const { title, description, img } = Object.fromEntries(formData);

    if (!title || !description || !img) {
        return alert('All fields are required!');
    }

    api.put(`${endpoints.movies}/${editForm.dataset.id}`, { title, description, img });
    renderHome();
}

export { renderEdit, setFormData };