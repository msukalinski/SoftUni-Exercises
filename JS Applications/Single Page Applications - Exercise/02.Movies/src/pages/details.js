import { api, endpoints } from "../api.js";
import { getUserData, hideContent } from "../utils.js";
import { setFormData } from "./editMovie.js";
import { getLikesData } from "./like.js";

const detailsSection = document.querySelector('#movie-example');

let ownerId = '';

async function renderDetails(id) {
  hideContent();
  const movieData = await api.get(`${endpoints.movies}/${id}`);
  ownerId = movieData._ownerId;
  detailsSection.style.display = 'block';

  const likesData = await getLikesData(movieData);

  movieDetails(movieData, likesData);
  setFormData(movieData);
}

function movieDetails(movie, likesData) {
  const movieContainer = document.createElement('div');
  movieContainer.classList.add('container');

  const userData = getUserData();
  const isOwner = ownerId === userData?._id;

  const likeButton = !isOwner && userData && !likesData.hasLiked ? '<a class="btn btn-primary" href="#">Like</a>' : '';
  const likesSpan = !isOwner && userData && likesData.hasLiked ? `<span class="enrolled-span">Liked ${likesData.likes.length}</span>` : '';

  movieContainer.innerHTML = `
    <div class="row bg-light text-dark">
        <h1>Movie title: ${movie.title}</h1>
        <div class="col-md-8">
          <img class="img-thumbnail" src="${movie.img}" alt="Movie" />
        </div>
        <div data-id="${movie._id}" class="col-md-4 text-center">
          <h3 class="my-3">Movie Description</h3>
          <p>${movie.description}</p>
          ${isOwner ? '<a class="btn btn-danger" href="/delete">Delete</a>' : ''}
          ${isOwner ? '<a class="btn btn-warning" href="/edit">Edit</a>' : ''}
          ${likeButton}
          ${likesSpan}
        </div>
    </div>
  `;

  detailsSection.replaceChildren(movieContainer);
}

export { renderDetails };