import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { get } from './api.js';
import { clearLocalStorage } from './utils.js';

const logoutEndpoint = 'users/logout';

let clickedBtnHref = '';

let activeButton = (btnHref) => {
    clickedBtnHref = btnHref;
}

const guestNav = () => html`
    <div id="guest">
        <a class="${setClass('/login', clickedBtnHref)}" id="loginLink" href="/login" @click="${setActive}">Login</a>
        <a class="${setClass('/register', clickedBtnHref)}" id="registerLink" href="/register" @click="${setActive}">Register</a>
    </div>
`;

const userNav = () => html`
    <div id="user">
        <a class="${setClass('/create', clickedBtnHref)}" id="createLink" href="/create" @click="${setActive}">Create Furniture</a>
        <a class="${setClass('/myFurniture', clickedBtnHref)}" id="profileLink" href="/myFurniture" @click="${setActive}">My Publications</a>
        <a id="logoutBtn" href="javascript:void(0)" @click="${onLogout}">Logout</a>
    </div>
`;

const navigationTemp = (hasUser) => html`
    <h1><a @click="${setActive}" href="/">Furniture Store</a></h1>
    <nav>
        <a class="${setClass('/dashboard', clickedBtnHref)}" id="catalogLink" href="/dashboard" @click="${setActive}">Dashboard</a>
        ${hasUser ? userNav() : guestNav()}
    </nav>
`;

function setClass(buttonHref, clickedBtn) {
    const buttonStatus = clickedBtn === buttonHref ? 'active' : '';

    return buttonStatus;
}

function setActive(e) {
    const url = new URL(e.currentTarget);
    const currButtonHref = url.pathname;

    currButtonHref === '/' ? activeButton('/dashboard') : activeButton(currButtonHref);

    activateClass();
}

function activateClass() {
    render(navigationTemp(), document.querySelector('header'));
}

function onLogout(e) {
    e.preventDefault();
    
    get(logoutEndpoint)

    clearLocalStorage();

    page.redirect('/');
}

export { navigationTemp, activeButton };