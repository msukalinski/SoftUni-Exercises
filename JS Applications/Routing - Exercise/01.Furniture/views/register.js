import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { post } from '../src/api.js';
import { setUserData, submitHandler } from '../src/utils.js';

const registerEndpoint = 'users/register';

const registerTemp = () => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit="${submitHandler(onRegister)}">
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
                <div class="form-group">
                    <label class="form-control-label" for="rePass">Repeat</label>
                    <input class="form-control" id="rePass" type="password" name="rePass">
                </div>
                <input type="submit" class="btn btn-primary" value="Register" />
            </div>
        </div>
    </form>
`;

function onRegister(data, form) {
    const { email, password, rePass } = data;

    if (!email || !password || !rePass) {
        return alert('All fields are required!');
    }

    if (password !== rePass) {
        return alert('Password don\'t match');
    }

    post(registerEndpoint, data)
        .then(data => {
            if (data) {
                setUserData(data);
                page.redirect('/');
            }
        })

    form.reset();
}

function renderRegister() {
    render(registerTemp(), document.querySelector('.container'));
}

export { renderRegister };