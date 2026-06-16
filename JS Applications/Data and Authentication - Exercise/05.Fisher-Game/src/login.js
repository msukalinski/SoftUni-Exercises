import { updateNav, postRequest, addHandler,endpoints } from "./util.js";

updateNav();

addHandler('#login-view>#login', 'submit', onLogin);

function onLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password) {
        return alert('All fields are required!');
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }

    postRequest(endpoints.login, null, options, './index.html', true);
}