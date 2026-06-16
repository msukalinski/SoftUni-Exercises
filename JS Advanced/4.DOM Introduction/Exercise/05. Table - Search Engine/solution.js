// function solve() {
//    document.querySelector('#searchBtn').addEventListener('click', onClick);
//    const rows = document.querySelectorAll('tbody tr');
//    const inputElement = document.querySelector('#searchField');

//    function onClick() {
//       const searchText = inputElement.value.toLowerCase();
//       inputElement.value = '';
//       for (const row of rows){
//          if (row.textContent.toLowerCase().includes(searchText)){
//             row.setAttribute('class', 'select');
//          }else{
//             row.removeAttribute('class');
//          }
//       }
//    }
// }

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const rowsElement = document.querySelectorAll('tbody tr');
   const inputElement = document.getElementById('searchField');

   function onClick() {
      rowsElement.forEach(row => {
         if (row.textContent.toLowerCase().includes(inputElement.value.LowerCase())) {
            row.setAttribute('class', 'select');
         } else {
            row.removeAttribute('class');
         };
      });
      inputElement.value = ''
      inputElement.focus();
   }
}