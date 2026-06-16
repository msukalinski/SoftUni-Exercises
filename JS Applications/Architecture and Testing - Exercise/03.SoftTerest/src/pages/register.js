import { router } from "../router.js";
import { setUserData, submitHandler } from "../utils.js";
import { requester } from "../api.js";
import { renderHome } from "./home.js";

const registerContent = document.querySelector('#register');

const signInButton = registerContent.querySelector('.alreadyUser>a');
signInButton.addEventListener('click', onSignIn);

const registerForm = registerContent.querySelector('form');
registerForm.addEventListener('submit', submitHandler(onRegister));

const endpoints = {
    register: 'users/register',
}

function renderRegister() {
    registerContent.style.display = 'block';
}

function onSignIn(e) {
    e.preventDefault();

    const url = new URL(e.target);
    router(url.pathname);
}

function onRegister(data, form) {
    const { email, password, repeatPassword } = data;

    if (email.length < 3) {
        return alert('Email should be atleast 3 characters long!');
    }

    if (password.length < 3) {
        return alert('Password should be atleast 3 characters long!');
    }

    if (password !== repeatPassword) {
        return alert("Password don't match!");
    }

    requester.post(endpoints.register, { email, password, repeatPassword })
        .then(data => {
            if (data) {
                setUserData(data);
                renderHome();

                form.reset();
            }
        });
}
export { renderRegister };