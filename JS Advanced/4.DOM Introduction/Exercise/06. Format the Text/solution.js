// function solve() {
//   const textArea = document.getElementById('input').value;
//   let text = textArea.trim();
//   let res = document.getElementById('output');

//   if (text === ''){
//     return;
//   }

//   let sentences = text.split('.')
//   .filter(x => x.trim() !== '')
//   .map(x => x.trim() + '.');

//   if (sentences.length === 0){
//     return;
//   }
//   let paragraphCount = Math.ceil(sentences.length / 3);
//   res.innerHTML = '';

//   for (let i = 0; i < paragraphCount; i++){
//     let paragraph = sentences.splice(0, 3).join(' ');
//     res.innerHTML += `<p>${paragraph}</p>`;
//   }
// }



// function solve() {
//   const textAreaRef = document.getElementById('input').value;
//   const resRef = document.getElementById('output');
//   let text = textAreaRef.trim();
//   const incomeText = text.split('.').filter(x => x.trim() !== '').map(x => x.trim() + '.');
//   if (incomeText === 0){
//     return;
//   }

//   for (let i = 0; i < incomeText.length; i += 3) {
//     let res = [];
//     for (let x = 0; x < 3; x++) {
//       if (!incomeText[i + x]) {
//         break;
//       }
//       res.push(incomeText[i + x]);
//     }
//     let p = document.createElement ("p");
//     p.textContent = res.join(' ');
//     resRef.appendChild (p);
//   }
// }


function solve() {
    const inputElement = document.getElementById('input');
    const resultElement = document.getElementById('output');
    let text = inputElement.value.trim();
    text = text.split('.').filter(x => x.trim() !== '').map(x => x.trim() + '.');
    for (let i = 0; i < text.length; i += 3){
        let res = [];
        for (let x = 0; x < 3; x++){
            if (!text[i + x]){
                break;
            };
            res.push(text[i + x]);
        };
        const para = document.createElement('p');
        para.textContent = res.join(' ');
        resultElement.append(para);
    }
}