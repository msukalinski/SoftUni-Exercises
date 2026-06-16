import { getUserData } from './utils.js';

const hostName = 'http://localhost:3030';
const endpoints = {
    movies: '/data/movies',
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
    likes: '/data/likes',
    likesByMovieId: (movieId) => `/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`,
    likesByUserId: (movieId, userId) => `/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`,
}

function requester(method, url, data) {

    const options = {
        method,
        headers: {},
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    return fetch(`${hostName}${url}`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            if (response.status === 204) {
                return response;
            } else {
                return response.json();
            }
        })
        .catch(error => {
            alert(error.message);
        });
}

const api = {
    get: (url) => requester('GET', url),
    post: (url, data) => requester('POST', url, data),
    put: (url, data) => requester('PUT', url, data),
    delete: (url) => requester('DELETE', url),
}

export { api, endpoints };