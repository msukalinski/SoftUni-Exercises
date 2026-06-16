import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';
import * as userService from '../services/userService.js';
import { submitHandler } from '../utils/utility.js';
import { notification } from './notify.js';

const registerTemplate = (onRegister) => html`
    <section id="register">
        <div class="form">
            <h2>Register</h2>
            <form class="register-form" @submit="${submitHandler(onRegister)}">
                <input type="text" name="email" id="register-email" placeholder="email" />
                <input type="password" name="password" id="register-password" placeholder="password" />
                <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
        </div>
    </section>
`;

export const registerContent = (ctx) => {
    const onRegister = (data, form) => {
        const { email, password, ['re-password']: rePass } = data;

        if (!email && !password) {
            return notification('All fields are required!');
        }

        if (password !== rePass) {
            return notification('Passwords don\'t match');
        }

        authService.register({ email, password })
            .then(userData => {
                if (userData) {
                    userService.setUserData(userData);
                    ctx.page.redirect('/');
                }
            });
    }
    ctx.render(registerTemplate(onRegister));
}