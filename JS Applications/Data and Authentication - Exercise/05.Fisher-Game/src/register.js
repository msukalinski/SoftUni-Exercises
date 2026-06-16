import { updateNav, postRequest, addHandler, endpoints } from "./util.js";

updateNav();

addHandler('form', 'submit', onRegister);

function onRegister(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePassword = formData.get('rePass');

    if (!email || !password) {
        return alert('All fields are required!');
    }
    if (password !== rePassword) {
        return alert('Password does not match!')
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }

    postRequest(endpoints.register, null, options, './index.html', true);
}