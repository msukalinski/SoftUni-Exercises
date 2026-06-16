import { api, endpoints } from "../api.js";
import { setUserData } from "../utils.js";
import { renderHome } from "./home.js";

const registerSection = document.querySelector('#form-sign-up');
const registerForm = document.querySelector('#form-sign-up>form');

registerForm.addEventListener('submit', onRegister);

function renderRegister() {
    registerSection.style.display = 'block';
}

function onRegister(e) {
    e.preventDefault();

    const formData = new FormData(registerForm);

    const { email, password, repeatPassword } = Object.fromEntries(formData);

    if (!email || !password) {
        return alert('All fields are required!');
    }
    
    if (password.length < 6) {
        return alert('Password must be atleast 6 characters!');
    }

    if (password !== repeatPassword) {
        return alert('Password does not match!');
    }

    api.post(endpoints.register, { email, password })
        .then(userData => {
            if (userData) {
                setUserData(userData)
                renderHome();
            }
        })
        .catch(error => {
            alert(error.message);
        });
}

export { renderRegister };