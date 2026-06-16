import page from '../node_modules/page/page.mjs';

import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderNavMiddleWare, renderContentMiddleware } from './middlewares/renderMiddleware.js';
import { createView } from './pages/create.js';
import { dashboardView } from './pages/dashboard.js';
import { deleteHandler } from './pages/delete.js';
import { detailsView } from './pages/details.js';
import { editView } from './pages/edit.js';
import { homeView } from './pages/home.js';
import { loginView } from './pages/login.js';
import { logoutHandler } from './pages/logout.js';
import { registerView } from './pages/register.js';

page(authMiddleware);
page(renderNavMiddleWare);
page(renderContentMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutHandler);
page('/dashboard', dashboardView);
page('/create/', createView);
page('/details/:detailsId', detailsView);
page('/edit/:detailsId', editView);
page('/delete/:detailsId', deleteHandler);

page.start();