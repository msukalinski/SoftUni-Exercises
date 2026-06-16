import { render } from './node_modules/lit-html/lit-html.js';
import { tableTemp } from './table.js';

const root = document.querySelector('body');

render(tableTemp(), root)