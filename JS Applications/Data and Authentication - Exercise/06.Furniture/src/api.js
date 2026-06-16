const hostName = 'http://localhost:3030';

function request(method, url, data) {
    const options = {
        method,
        headers: {},
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getStorage('userData');

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    return fetch(`${hostName}${url}`, options)
        .then(response => {
            if (!response.ok) {
                return response.json().then(error => {
                    throw new Error(error.message);
                });
            }
            if (!url.includes('logout')) {
                return response.json();
            }
        })
        .catch(error => {
            alert(error.message);
        });
}

function setStorage(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

function getStorage(data) {
    return JSON.parse(localStorage.getItem(data));
}

const get = (url) => request('GET', url);
const post = (url, data) => request('POST', url, data);
const put = (url, data) => request('PUT', url, data);
const del = (url) => request('DELETE', url);

export {
    get,
    post,
    put,
    del,
    setStorage,
    getStorage
};