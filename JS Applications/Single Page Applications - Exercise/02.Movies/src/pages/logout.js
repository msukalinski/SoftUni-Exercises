import { api, endpoints } from "../api.js";
import { updateNav } from "../nav.js";
import { renderLogin } from "./login.js";

function renderLogout() {
    api.get(endpoints.logout);
    localStorage.clear();
    updateNav();
    renderLogin();
}

export { renderLogout };