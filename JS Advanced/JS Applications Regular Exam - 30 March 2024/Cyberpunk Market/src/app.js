import page from '../node_modules/page/page.mjs';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderContentMiddleware, renderNavMiddleware } from './middlewares/renderMiddleware.js';
import { sellContent } from './pages/create.js';
import { dashboardContent } from './pages/dashboard.js';
import { deleteHandler } from './pages/delete.js';
import { detailsContent } from './pages/details.js';
import { editContent } from './pages/edit.js';
import { homeContent } from './pages/home.js';
import { loginContent } from './pages/login.js';
import { logoutHandler } from './pages/logout.js';
import { registerContent } from './pages/register.js';

page(authMiddleware);
page(renderNavMiddleware);
page(renderContentMiddleware);

page('/', homeContent);
page('/login', loginContent);
page('/register', registerContent);
page('/logout', logoutHandler);
page('/dashboard', dashboardContent);
page('/sell', sellContent);
page('/details/:cardId', detailsContent);
page('/edit/:cardId', editContent);
page('/delete/:cardId', deleteHandler);

page.start();