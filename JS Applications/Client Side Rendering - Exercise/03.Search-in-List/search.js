import { html, render } from '../node_modules/lit-html/lit-html.js';
import { towns } from "./towns.js";

const root = document.querySelector('#towns');

const townsTemplate = (towns) => html`
   <ul>
      ${towns.map(town => html`<li>${town}</li>`)}
   </ul>
`;

render(townsTemplate(towns), root);

(function search() {
   const searchText = document.querySelector('#searchText');
   const searchButton = document.querySelector('button');
   const result = document.querySelector('#result');

   searchButton.addEventListener('click', onSearch);

   function onSearch(e) {
      const townsList = e.currentTarget.parentNode.querySelectorAll('#towns>ul>li');

      const filteredTowns = Array.from(townsList)
         .filter(town => town.textContent.includes(searchText.value));

      townsList.forEach(town => town.removeAttribute('class'));
      result.textContent = '';

      if (!filteredTowns || !searchText.value) {
         return;
      }

      filteredTowns.forEach(town => town.classList.add('active'));

      result.textContent = `${filteredTowns.length} matches found`;
   }
})();
