import { html } from '../../node_modules/lit-html/lit-html.js';

const guestNav = () => html`
    <div class="guest">
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div>
`;

const userNav = () => html`
    <div class="user">
      <a href="/sell">Sell</a>
      <a href="/logout">Logout</a>
    </div>
`;

const navigationTemplate = (isUser) => html`
    <a id="logo" href="/"><img id="logo" src="./images/logo.png" alt="img" /></a>
    <nav>
      <div>
        <a href="/dashboard">Market</a>
      </div>
      ${isUser ? userNav() : guestNav()}
    </nav>
`;

export const navigationContent = (ctx) => {
    return navigationTemplate(ctx.user);
}