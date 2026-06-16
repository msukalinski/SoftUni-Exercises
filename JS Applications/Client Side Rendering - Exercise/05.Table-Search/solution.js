import { html, render } from '../node_modules/lit-html/lit-html.js';

(function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const url = 'http://localhost:3030/jsonstore/advanced/table';

   const root = document.querySelector('tbody');

   const searchText = document.querySelector('#searchField');
   const searchButton = document.querySelector('#searchBtn');

   const tableRowTemp = (data) => html`
   ${data.map(curData => html`
      <tr>
         <td>${curData.firstName} ${curData.lastName}</td>
         <td>${curData.email}</td>
         <td>${curData.course}</td>
      </tr>`)}
   `;

   fetch(url)
      .then(response => response.json())
      .then(data => {
         render(tableRowTemp(Object.values(data)), root)
      })

   searchButton.addEventListener('click', onClick);

   function onClick(e) {
      const tableRows = root.querySelectorAll('tr');
      const tableData = root.querySelectorAll('tr>td');

      tableRows.forEach(tr => tr.classList.remove('select'));

      if (!searchText.value) {
         return;
      }
      const filteredData = Array.from(tableData)
         .filter(td => td.textContent.toLowerCase().includes(searchText.value.toLowerCase()));

      filteredData.forEach(td => td.parentNode.classList.add('select'));

      searchText.value = '';
   }
})()