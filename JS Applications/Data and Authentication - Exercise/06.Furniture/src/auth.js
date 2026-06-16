import { post, setStorage } from "./api.js";

const loginForm = document.querySelector('form:nth-of-type(2n)');
loginForm.addEventListener('submit', onLogin);

const registerForm = document.querySelector('form');
registerForm.addEventListener('submit', onRegister);

function onLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(formData);

    if (!email || !password) {
        return alert('All fields are required!');
    }

    post('/users/login', { email, password })
        .then(data => {
            if (data) {
                setStorage(data);
                window.location = 'homeLogged.html';
            }
        })
        .catch(error => {
            alert(error.message);
            loginForm.reset();
        });
}

function onRegister(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { email, password, rePass } = Object.fromEntries(formData);

    if (!email || !password) {
        return alert('All fields are required!');
    }

    if (password !== rePass) {
        return alert('Password does not match!');
    }

    post('/users/register', { email, password })
        .then(data => {
            if (data) {
                setStorage(data);
                window.location = 'homeLogged.html'
            }
        })
        .catch(error => {
            alert(error.message);
            registerForm.reset();
        });
}