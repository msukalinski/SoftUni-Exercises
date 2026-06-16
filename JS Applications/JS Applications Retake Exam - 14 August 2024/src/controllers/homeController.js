import { homePageTemplate } from "../views/home.js";
import { navigationTemplate } from '../views/navigation.js';

export const renderHome = (ctx) => {
    ctx.render(homePageTemplate());
}

export const renderNavigation = (ctx) => {
    return navigationTemplate(ctx.user);
}