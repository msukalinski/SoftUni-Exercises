// function search() {
//    const liItems = document.querySelectorAll('#towns li');
//    const input = document.getElementById('searchText').value;
//    const res = document.getElementById('result');

//    let counter = 0;

//    for (let li of liItems){
//       if (li.textContent.toLowerCase().includes(input.toLowerCase())){
//          li.style.fontWeight = 'bold';
//          li.style.textDecoration = 'underline';
//          counter++;
//       }else{
//          li.style.fontWeight = '';
//          li.style.textDecoration = '';
//       }
//       res.textContent = `${counter} matches found`
//    }
// }



function search() {
   const liElements = document.querySelectorAll('#towns li');
   const inputElement = document.getElementById('searchText');
   const resultElement = document.getElementById('result');
   let counter = 0;

   liElements.forEach(element => {
      if (element.textContent.toLowerCase().includes(inputElement.value.toLowerCase())){
         counter++;
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
      }else{
         element.style.fontWeight = '';
         element.style.textDecoration = '';
      }
   });
   resultElement.textContent = `${counter} matches found`;
   inputElement.value = '';
   inputElement.focus()
}