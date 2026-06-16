const host = 'http://localhost:3030';

function requester(method, url, data) {
    const options = {
        method,
        headers: {},
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    return fetch(`${host}/${url}`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        })
        .catch(error => {
            alert(error.message);
        });
}

const get = (url) => requester('GET', url);
const post = (url, data) => requester('POST', url, data);
const put = (url, data) => requester('PUT', url, data);
const del = (url) => requester('DELETE', url);

export { get, post, put, del };