import { requester } from "./api.js";
import { renderHome } from "./pages/home.js";

const endpoints = {
    logout: 'users/logout',
}

function onLogout() {
    requester.get(endpoints.logout);
    localStorage.clear();

    renderHome();
}

export { onLogout };