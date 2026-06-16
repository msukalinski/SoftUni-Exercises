import page from '../node_modules/page/page.mjs';

import { renderCreate } from '../views/createFurniture.js';
import { renderDashboard } from '../views/dashboard.js';
import { renderDetails } from '../views/details.js';
import { renderEdit } from '../views/edit.js';
import { renderLogin } from '../views/login.js';
import { renderMyFurniture } from '../views/myFurniture.js';
import { renderRegister } from '../views/register.js';
import { updateNav } from './utils.js';

updateNav();

page('/', renderDashboard);
page('/dashboard', renderDashboard);
page('/login', renderLogin);
page('/register', renderRegister);
page('/create', renderCreate);
page('/details/:detailsId', renderDetails);
page('/edit/:detailsId', renderEdit);
page('/myFurniture', renderMyFurniture);

page.start();