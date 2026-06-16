import * as authService from '../services/authService.js';

export const logoutHandler = (ctx) => {
    authService.logout()
        .then(() => {
            localStorage.clear();
            ctx.page.redirect('/');
        });
}