import page from '../node_modules/page/page.mjs';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderContentMiddleware, renderNavigationMiddleware } from './middlewares/renderMiddleware.js';
import { createHandler } from './pages/create.js';
import { dashboardHandler } from './pages/dashboard.js';
import { deleteHandler } from './pages/delete.js';
import { detailsHandler } from './pages/details.js';
import { editHandler } from './pages/edit.js';
import { homeHandler } from './pages/home.js';
import { loginHandler } from './pages/login.js';
import { logoutHandler } from './pages/logout.js';
import { registerHandler } from './pages/register.js';
import { searchHandler } from './pages/search.js';

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/', homeHandler);
page('/login', loginHandler);
page('/register', registerHandler);
page('/logout', logoutHandler);
page('/dashboard', dashboardHandler);
page('/create', createHandler);
page('/details/search', searchHandler);
page('/details/:carId', detailsHandler);
page('/edit/:carId', editHandler);
page('/delete/:carId', deleteHandler);

page.start();