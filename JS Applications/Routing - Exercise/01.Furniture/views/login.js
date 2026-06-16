import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { post } from '../src/api.js';
import { setUserData, submitHandler } from '../src/utils.js';

const loginEndpoint = 'users/login';

const loginTemp = () => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Login User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit="${submitHandler(onLogin)}">
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class="form-control" id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class="form-control" id="password" type="password" name="password">
                </div>
                <input type="submit" class="btn btn-primary" value="Login" />
            </div>
        </div>
    </form>
`;

function onLogin(data, form) {
    const { email, password } = data;

    if (!email || !password) {
        return alert('All fields are required!');
    }

    post(loginEndpoint, data)
        .then(data => {
            if (data) {
                setUserData(data);
                page.redirect('/dashboard');
            }
        });

    form.reset();
}

function renderLogin() {
    render(loginTemp(), document.querySelector('.container'));
}

export { renderLogin };