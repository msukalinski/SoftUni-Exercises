import { getUserData } from "./utils.js";

const userNav = document.querySelectorAll('li[data-user]');
const guestNav = document.querySelectorAll('li[data-guest]');

function updateNav() {
    const userData = getUserData();

    if (userData) {
        userNav.forEach(nav => nav.style.display = 'block');
        guestNav.forEach(nav => nav.style.display = 'none');
    } else {
        guestNav.forEach(nav => nav.style.display = 'block');
        userNav.forEach(nav => nav.style.display = 'none');
    }
}

export { updateNav };