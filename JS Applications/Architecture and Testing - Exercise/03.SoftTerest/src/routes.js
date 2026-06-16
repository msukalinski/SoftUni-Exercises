import { onLogout } from "./logout.js";
import { renderCreate } from "./pages/create.js";
import { renderDashboard } from "./pages/dashboard.js";
import { renderDetails } from "./pages/details.js";
import { renderHome } from "./pages/home.js";
import { renderLogin } from "./pages/login.js";
import { renderRegister } from "./pages/register.js";

const routes = {
    '/': renderHome,
    '/dashboard': renderDashboard,
    '/login': renderLogin,
    '/register': renderRegister,
    '/create': renderCreate,
    '/details': renderDetails,
    '/logout': onLogout,
}

export { routes };