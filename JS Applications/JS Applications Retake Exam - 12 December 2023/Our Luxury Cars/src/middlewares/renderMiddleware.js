import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationHandler } from '../pages/navigations.js';

const headerElement = document.querySelector('#wrapper>header');
const mainElement = document.querySelector('#wrapper>#main-element');

export const renderNavigationMiddleware = (ctx, next) => {
    render(navigationHandler(ctx), headerElement);

    next();
}

const renderContent = (template) => render(template, mainElement);

export const renderContentMiddleware = (ctx, next) => {
    ctx.render = renderContent;

    next();
}