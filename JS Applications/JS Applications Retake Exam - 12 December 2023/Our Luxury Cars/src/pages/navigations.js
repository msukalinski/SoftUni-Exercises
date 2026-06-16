import { html } from '../../node_modules/lit-html/lit-html.js';

const guestNav = () => html`
    <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
`;

const userNav = () => html`
    <div class="user">
      <a href="/create">Add Your Car</a>
      <a href="/logout">Logout</a>
    </div>
`;

const navigationTemplate = (isUser) => html`
    <a id="logo" href="/"><img id="logo-car" src="./images/car-logo.png" alt="img"/></a>
    <nav>
        <div>
          <a href="/dashboard">Our Cars</a>
          <a href="/details/search">Search</a>
        </div>

        ${isUser ? userNav() : guestNav()}
    </nav>
`;

export const navigationHandler = (ctx) => {
    return  navigationTemplate(ctx.user);
}