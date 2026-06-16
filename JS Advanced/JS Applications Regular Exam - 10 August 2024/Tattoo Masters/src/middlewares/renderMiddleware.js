import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationHandler } from '../pages/navigation.js';

const headerElement = document.querySelector('#content>header');
const mainElement = document.querySelector('#content>main');

export const renderNavMiddleware = (ctx, next) => {
    render(navigationHandler(ctx), headerElement);

    next();
}

const renderContent = (template) => render(template, mainElement);

export const renderMiddleware = (ctx, next) => {
    ctx.render = renderContent;

    next();
}