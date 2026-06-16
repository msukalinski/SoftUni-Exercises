import { renderHome } from './pages/home.js';
import { renderLogin } from './pages/login.js';
import { renderLogout } from './pages/logout.js';
import { renderRegister } from './pages/register.js';
import { renderAddMovieForm } from './pages/addMovie.js';
import { renderDetails } from './pages/details.js';
import { hideContent } from './utils.js';
import { renderEdit } from './pages/editMovie.js';
import { renderHomeAfterDel } from './pages/delete.js';

const routes = {
    '/': renderHome,
    '/login': renderLogin,
    '/register': renderRegister,
    '/logout': renderLogout,
    '/addMovie': renderAddMovieForm,
    '/details': () => renderDetails,
    '/edit': renderEdit,
    '/delete': renderHomeAfterDel,
}

function router(path) {
    hideContent();

    const viewRenderer = routes[path];
    viewRenderer();
}

export { router };