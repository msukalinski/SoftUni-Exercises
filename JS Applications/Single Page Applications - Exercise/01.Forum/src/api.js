const hostName = 'http://localhost:3030';
const endpoints = {
    topics: '/jsonstore/collections/myboard/posts',
    comments: '/jsonstore/collections/myboard/comments'
}

function request(method, url, data) {
    const options = {
        method,
        headers: {},
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    return fetch(`${hostName}${url}`, options)
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

const get = (url) => request('GET', url);
const post = (url, data) => request('POST', url, data);

export { post, get, endpoints };