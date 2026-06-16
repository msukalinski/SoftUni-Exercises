import { render } from '../node_modules/lit-html/lit-html.js';
import { navigationTemp } from './nav.js';

function clearLocalStorage() {
    localStorage.clear();
}

function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

function setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

function submitHandler(callback) {
    return function (e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        callback(data, e.currentTarget);
    }
}

function updateNav() {
    const userData = getUserData();

    render(navigationTemp(userData), document.querySelector('header'));
}

export { getUserData, setUserData, submitHandler, updateNav, clearLocalStorage };