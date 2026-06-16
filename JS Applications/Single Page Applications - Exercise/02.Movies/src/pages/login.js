import { api, endpoints } from "../api.js";
import { setUserData } from "../utils.js";
import { renderHome } from "./home.js";

const loginSection = document.querySelector('#form-login');
const loginForm = loginSection.querySelector('#login-form');

loginForm.addEventListener('submit', onLogin);

function renderLogin() {
    loginSection.style.display = 'block';
}

function onLogin(e) {
    e.preventDefault();

    const formData = new FormData(loginForm);
    const { email, password } = Object.fromEntries(formData);

    if (!password || !email) {
        return alert('All fields are required!');
    }

    api.post(endpoints.login, { email, password })
        .then(userData => {
            if (userData) {
                setUserData(userData);
                renderHome();
            }
        })
        .catch(error => {
            alert(error.message);
        });
}

export { renderLogin };