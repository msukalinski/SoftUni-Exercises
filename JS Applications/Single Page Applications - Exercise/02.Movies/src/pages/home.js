import { api, endpoints } from "../api.js";
import { updateNav } from "../nav.js";
import { getUserData, hideContent } from "../utils.js";

const homeSection = document.querySelector('#home-page');
const movieList = document.querySelector('#movies-list');
const movieSection = document.querySelector('#movie');
const addMovieButton = document.querySelector('#add-movie-button');


function renderHome() {
  hideContent();
  updateNav();

  const userData = getUserData();

  if (userData) {
    addMovieButton.style.display = 'inline-block';
  }

  api.get(endpoints.movies)
    .then(movies => {
      renderAllMovies(movies)
      homeSection.style.display = 'block';
      movieSection.style.display = 'block';
    })
}

function renderAllMovies(movies) {
  const fragment = document.createDocumentFragment();

  movies.forEach(movie => fragment.appendChild(renderMovie(movie)));

  movieList.innerHTML = '';
  movieList.appendChild(fragment);
}

function renderMovie(movie) {
  const movieElement = document.createElement('li');
  movieElement.setAttribute('class', "card mb-4");

  movieElement.innerHTML = `
      <img class="card-img-top"  src="${movie.img}"/>
      <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
        <a href="#">
        </a>
      </div>
      <div class="card-footer">
          <a data-id=${movie._id} href="/details">
            <button type="button" class="btn btn-info">Details</button>
          </a>     
      </div>
    `
  return movieElement;
}

export { renderHome };