import { getUserData } from "./userService.js";

const host = 'http://localhost:3030'

const requester = (method, url, data) => {
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
            alert('Error fetchhing the data\n', error.message);
        });
}

export const get = requester.bind({}, 'GET');
export const post = requester.bind({}, 'POST');
export const put = requester.bind({}, 'PUT');
export const del = requester.bind({}, 'DELETE');