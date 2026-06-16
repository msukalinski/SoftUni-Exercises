import { api, endpoints } from "../api.js";
import { renderHome } from "./home.js";

const addMovieSection = document.querySelector('#add-movie');
const addMovieForm = addMovieSection.querySelector('form');

addMovieForm.addEventListener('submit', onAddMovie);

function renderAddMovieForm() {
    addMovieSection.style.display = 'block';
}

function onAddMovie(e) {
    e.preventDefault();

    const formData = new FormData(addMovieForm);
    const { title, description, img } = Object.fromEntries(formData);

    if (!title || !description || !img) {
        return alert('All fields are required!');
    }

    api.post(endpoints.movies, { title, description, img })
    addMovieForm.reset();
    renderHome();
}

export { renderAddMovieForm };