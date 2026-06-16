import { getUserData } from "./utils.js";

const host = 'http://localhost:3030'

function request(method, url, data) {
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

    return fetch(`${host}/${url}`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            if (response.status === 204) {
                return response;
            }

            return response.json();
        })
        .catch(error => {
            alert(error.message);
        });
}

const requester = {
    get: (url) => request('GET', url),
    post: (url, data) => request('POST', url, data),
    put: (url, data) => request('POST', url, data),
    del: (url) => request('DELETE', url),
}

export { requester };