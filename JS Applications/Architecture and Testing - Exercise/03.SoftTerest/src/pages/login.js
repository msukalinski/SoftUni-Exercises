import { requester } from "../api.js";
import { router } from "../router.js";
import { setUserData, submitHandler } from "../utils.js";
import { renderHome } from "./home.js";

const loginContent = document.querySelector('#login');

const signUpButton = loginContent.querySelector('.alreadyUser>a');
signUpButton.addEventListener('click', onSignUp);

const loginForm = loginContent.querySelector('form');
loginForm.addEventListener('submit', submitHandler(onLogin));

const endpoints = {
    login: 'users/login',
}

function renderLogin() {
    loginContent.style.display = 'block';
}

function onSignUp(e) {
    e.preventDefault();

    const url = new URL(e.target);
    router(url.pathname);
}

function onLogin(data, form) {
    const { email, password } = data;

    if (!email || !password) {
        return alert('All fields are required!');
    }

    requester.post(endpoints.login, { email, password })
        .then(data => {
            if (data) {
                setUserData(data);
                renderHome();

                form.reset();
            }
        });
}

export { renderLogin };