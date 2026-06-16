import { updateNav } from "./nav.js";
import { renderHome } from "./pages/home.js";
import { router } from "./router.js";
import { hideContent } from "./utils.js";

hideContent();
renderHome();
updateNav();

const navigation = document.querySelector('nav');

navigation.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.nodeName === 'A') {
        const url = new URL(e.target);
        router(url.pathname);
    }

    if (e.target.nodeName === 'IMG') {
        const url = new URL(e.target.parentNode);
        router(url.pathname);
    }
})