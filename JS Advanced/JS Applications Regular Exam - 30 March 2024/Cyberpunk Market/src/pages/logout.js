import * as authService from '../services/authService.js';
import { clearStorage } from '../services/userService.js';

export const logoutHandler = (ctx) => {
    authService.logout()
        .then(() => {
            clearStorage();
            ctx.page.redirect('/');
        })
}