import page from '../node_modules/page/page.mjs';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderMiddleware, renderNavMiddleware } from './middlewares/renderMiddleware.js';
import { renderCreate } from './pages/create.js';
import { renderDashboard } from './pages/dashboard.js';
import { deleteHandler } from './pages/delete.js';
import { renderDetails } from './pages/details.js';
import { renderEdit } from './pages/edit.js';
import { renderHome } from './pages/home.js';
import { renderLogin } from './pages/login.js';
import { logoutHandler } from './pages/logout.js';
import { renderRegister } from './pages/register.js';

page(authMiddleware);
page(renderNavMiddleware);
page(renderMiddleware);

page('/', renderHome);
page('/login', renderLogin);
page('/register', renderRegister);
page('/logout', logoutHandler);
page('/dashboard', renderDashboard);
page('/create', renderCreate);
page('/tattoos/:tattooId/details', renderDetails);
page('/tattoos/:tattooId/edit', renderEdit);
page('/tattoos/:tattooId/delete', deleteHandler);

page.start();