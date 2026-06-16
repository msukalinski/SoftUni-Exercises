import { html } from '../../node_modules/lit-html/lit-html.js';

const guestNav = () => html`
    <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
`;
const userNav = () => html`
    <div class="user">
      <a href="/create">Add Tattoo</a>
      <a id="logout" href="/logout">Logout</a>
    </div>
`;

const navigationTemplate = (isUser) => html`
    <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="logo" /></a>
    <nav>
        <a href="/dashboard">Collection</a>
        ${isUser ? userNav() : guestNav()}
    </nav>
`;

export const navigationHandler = (ctx) => {
    return navigationTemplate(ctx.user);
}