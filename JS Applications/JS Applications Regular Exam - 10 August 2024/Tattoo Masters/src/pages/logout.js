import * as authService from '../services/authService.js';
import { clearLocalStorage } from '../services/userService.js';

export const logoutHandler = (ctx) => {
    authService.logout()
        .then(() => {
            clearLocalStorage();
            ctx.page.redirect('/');
        })
}