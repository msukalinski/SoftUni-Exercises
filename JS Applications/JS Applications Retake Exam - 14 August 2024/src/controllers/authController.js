import * as authService from '../services/authService.js';
import { setUserData } from '../services/userService.js';
import { loginTemplate } from '../views/login.js';
import { registerTemplate } from '../views/register.js';

export const renderLogin = (ctx) => {
    const onLogin = (data, form) => {
        const { email, password } = data;

        authService.login({ email, password })
            .then(userData => {
                if (userData) {
                    setUserData(userData);
                    ctx.page.redirect('/');
                }
            });
    }

    ctx.render(loginTemplate(onLogin));
}

export const renderRegister = (ctx) => {
    const onRegister = (data, form) => {

        const { email, password, ['re-password']: rePass } = data;

        authService.register({ email, password })
            .then(userData => {
                if (userData) {
                    setUserData(userData);
                    ctx.page.redirect('/');
                }
            });
    }

    ctx.render(registerTemplate(onRegister));
}

export const logoutHandler = (ctx) => {
    authService.logout()
        .then(() => {
            localStorage.clear();
            ctx.page.redirect('/');
        });
}