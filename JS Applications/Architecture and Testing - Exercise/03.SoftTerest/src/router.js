import { routes } from "./routes.js";
import { hideContent } from "./utils.js"

function router(pathname) {
    hideContent();

    const viewRenderer = routes[pathname];

    viewRenderer();
}

export { router };