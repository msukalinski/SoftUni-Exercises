import { updateNav } from "../nav.js";
import { router } from "../router.js";
import { hideContent } from "../utils.js";

const homeContent = document.querySelector('main>#home');
const getStartedButton = homeContent.querySelector('div>a');

getStartedButton.addEventListener('click', onGetStarted);

function renderHome() {
    hideContent();
    updateNav();
    
    homeContent.style.display = 'block';
}

function onGetStarted(e) {
    e.preventDefault();

    const url = new URL(e.target);
    router(url.pathname);
}

export { renderHome };