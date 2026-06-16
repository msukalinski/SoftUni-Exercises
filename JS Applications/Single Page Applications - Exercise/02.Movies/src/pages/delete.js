import { api, endpoints } from "../api.js";
import { renderHome } from "./home.js";

function renderHomeAfterDel() {
    renderHome();
}

function deleteMovie(id) {
    api.delete(`${endpoints.movies}/${id}`);
}

export { renderHomeAfterDel, deleteMovie };