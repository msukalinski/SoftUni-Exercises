import { html } from '../../node_modules/lit-html/lit-html.js';

const userNav = () => html`
<div class="user">
    <a href="/create">Add Show</a>
    <a href="/logout">Logout</a>
</div>
`;

const guestNav = () => html`
<div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`;

export const navigationTemplate = (userData) => html`
<a id="logo" href="/"><img id="logo-img" src="./images/show_logo.png" alt="logo" />
</a>
<nav>
  <div>
    <a href="/dashboard">TV Shows</a>
    <a href="/search">Search</a>
  </div>
  ${userData ? userNav() : guestNav()}
</nav>
`;