import { updateNav } from './nav.js';
import { deleteMovie } from './pages/delete.js';
import { renderDetails } from './pages/details.js';
import { renderHome } from './pages/home.js';
import { getLikedMovie } from './pages/like.js';
import { router } from './router.js';

updateNav();
renderHome();

const navigation = document.querySelector('nav');

navigation.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.nodeName === 'A' && e.target.getAttribute('id') !== 'welcome-msg') {
        const url = new URL(e.target);
        router(url.pathname);
    }
})

const addMovieButtonSection = document.querySelector('#add-movie-button');

addMovieButtonSection.addEventListener('click', (e) => {
    e.preventDefault();

    const url = new URL(e.target);
    router(url.pathname);
})

const moviesList = document.querySelector('#movies-list');

moviesList.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.nodeName !== 'BUTTON') {
        return;
    }

    const movieId = e.target.parentNode.dataset.id;
    renderDetails(movieId);

    const url = new URL(e.target.parentNode);
    router(url.pathname);
})

const movieDetails = document.querySelector('#movie-example');

movieDetails.addEventListener('click', (e) => {
    e.preventDefault();

    const details = document.querySelector('.col-md-4.text-center');

    if (e.target.nodeName !== 'A') {
        return;
    }

    if (e.target.className === 'btn btn-danger') {
        deleteMovie(details.dataset.id);
    }

    if (e.target.className === 'btn btn-primary') {
        e.target.remove();
        
        getLikedMovie(details.dataset.id);
        renderDetails(details.dataset.id);

        return;
    }

    const url = new URL(e.target);
    router(url.pathname);
})