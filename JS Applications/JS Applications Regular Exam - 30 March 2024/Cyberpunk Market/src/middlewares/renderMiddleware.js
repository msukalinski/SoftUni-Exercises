import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationContent } from '../pages/navigation.js';

const headerElement = document.querySelector('header');
const mainElement = document.querySelector('#main-element');

export const renderNavMiddleware = (ctx, next) => {
    render(navigationContent(ctx), headerElement);

    next();
}

const renderContent = (template) => render(template, mainElement);

export const renderContentMiddleware = (ctx, next) => {
    ctx.render = renderContent;

    next();
}