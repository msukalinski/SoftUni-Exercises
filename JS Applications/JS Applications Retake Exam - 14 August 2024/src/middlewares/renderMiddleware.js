import { render } from '../../node_modules/lit-html/lit-html.js';
import { renderNavigation } from '../controllers/homeController.js';

const mainRoot = document.querySelector('main');
const headerRoot = document.querySelector('header');

export const renderNavMiddleware = (ctx, next) => {
    render(renderNavigation(ctx), headerRoot);

    next();
}

const renderContent = (template) => render(template, mainRoot);

export const renderContentMiddleware = (ctx, next) => {
    ctx.render = renderContent;

    next();
}