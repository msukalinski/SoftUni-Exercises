import { request } from "./api.js";

const loginForm = document.querySelector('form:nth-of-type(2n)');
loginForm.addEventListener('submit', onLogin);

function onLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    request('http://localhost:3030/users/login', 'POST', { email, password });
    window.location = 'homeLogged.html';
}