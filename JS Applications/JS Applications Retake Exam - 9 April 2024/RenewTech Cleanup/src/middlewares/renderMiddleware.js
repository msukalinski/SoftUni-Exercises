import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../pages/navigation.js';

const headerElement = document.querySelector('#wrapper>header');
const mainElement = document.querySelector('#wrapper>main');

export const renderNavMiddleWare = (ctx, next) => {
    render(navigationView(ctx), headerElement);

    next();
}

const contentRender = (template) => render(template, mainElement);

export const renderContentMiddleware = (ctx, next) => {
    ctx.render = contentRender;

    next();
}