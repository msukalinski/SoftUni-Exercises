// function create(words) {
//    const resultElement = document.getElementById('content');
//    for (const word of words){
//       const div = document.createElement('div');
//       const para = document.createElement('p');
//       para.textContent = word;
//       para.style.display = 'none';

//       div.append(para);

//       div.addEventListener('click', reveal);
//       function reveal(event){
//          event.currentTarget.children[0].style.display = 'block';
//       }
//       resultElement.append(div);
//    }
// }


function create(words) {
   const resultElement = document.getElementById('content');

   for (const word of words) {
      const div = createSection(word);
      resultElement.append(div);

      function createSection(content) {
         const div = document.createElement('div');
         const para = document.createElement('p');
         para.textContent = content;
         para.style.display = 'none';
         div.append(para);

         // div.addEventListener('click', reveal);
         div.addEventListener('click', () => reveal(para)); //reference to 43 line => the function
         //Bind can be used too
         // div.addEventListener('click', () => reveal.bind(null, para)); //reference to 43 line => the function

         return div;

         // function reveal() {
         //    para.style.display = 'block';
         // }
      }
      function reveal(para) {
         para.style.display = 'block';
      }
   }
}