import page from '../node_modules/page/page.mjs';

import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderContentMiddleware, renderNavMiddleware } from './middlewares/renderMiddleware.js';

import { renderHome } from './controllers/homeController.js';
import { logoutHandler, renderLogin, renderRegister } from './controllers/authController.js';
import { deleteHandler, renderCreate, renderDashboard, renderDetails, renderEdit, search } from './controllers/showController.js';

page(authMiddleware);
page(renderNavMiddleware);
page(renderContentMiddleware);

page('/', renderHome);
page('/login', renderLogin);
page('/register', renderRegister);
page('/logout', logoutHandler);
page('/dashboard', renderDashboard);
page('/shows/:showId/details', renderDetails);
page('/create', renderCreate);
page('/shows/:showId/edit', renderEdit);
page('/shows/:showId/delete', deleteHandler);
page('/search', search);

page.start();