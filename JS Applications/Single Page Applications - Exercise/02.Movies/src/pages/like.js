import { api, endpoints } from "../api.js";
import { getUserData } from "../utils.js";

function getLikedMovie(movieId) {
    api.get(`${endpoints.movies}/${movieId}`)
        .then(movieData => {
            postLike(movieData)
        })
}

function postLike(movie) {
    api.post(`${endpoints.likes}`, { movieId: movie._id });
}

async function getLikesData(movieData) {
    const userData = getUserData();

    const requests = [
        api.get(endpoints.likesByMovieId(movieData._id))
    ]

    if (userData) {
        requests.push(api.get(endpoints.likesByUserId(movieData._id, userData._id)))
    }
    const [hasLiked, likes] = await Promise.all(requests);

    return {
        hasLiked,
        likes
    }
}

export { getLikedMovie, getLikesData };