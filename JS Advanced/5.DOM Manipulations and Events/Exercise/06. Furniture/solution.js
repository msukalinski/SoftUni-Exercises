// function solve() {
//   let buttonElements = document.querySelectorAll('button');
//   let textAreaElements = document.querySelectorAll('div > textarea');
//   let tableBodyElements = document.querySelector('tbody');

//   let [genButton, buyButton] = buttonElements;

//   const onGenerateClick = (e) => {
//     const furnitureDetail = JSON.parse(textAreaElements[0].value);

//     furnitureDetail.forEach(element => {
//       const imgFragment = document.createDocumentFragment();
//       const nameFragment = document.createDocumentFragment();
//       const priceFragment = document.createDocumentFragment();
//       const decorFragment = document.createDocumentFragment();
//       const checkboxFragment = document.createDocumentFragment();

//       const newTrElement = document.createElement('tr');

//       const imgElement = imgFragment.appendChild(document.createElement('td')).appendChild(document.createElement('img'));
//       imgElement.src = element.img;

//       const nameElement = nameFragment.appendChild(document.createElement('td')).appendChild(document.createElement('p'));
//       nameElement.textContent = element.name;

//       const priceElement = priceFragment.appendChild(document.createElement('td')).appendChild(document.createElement('p'));
//       priceElement.textContent = Number(element.price);

//       const decorElement = decorFragment.appendChild(document.createElement('td')).appendChild(document.createElement('p'));
//       decorElement.textContent = Number(element.decFactor);

//       const checkboxElement = checkboxFragment.appendChild(document.createElement('td')).appendChild(document.createElement('input'));
//       checkboxElement.type = 'checkbox';

//       newTrElement.appendChild(imgFragment);
//       newTrElement.appendChild(nameFragment);
//       newTrElement.appendChild(priceFragment);
//       newTrElement.appendChild(decorFragment);
//       newTrElement.appendChild(checkboxFragment);
//       tableBodyElements.appendChild(newTrElement);

//       textAreaElements[0].value = '';
//     });
//   }

//   const onBuyClick = (e) => {
//     let checkboxElements = document.querySelectorAll('td > input[type="checkbox"]');
//     let products = [];
//     let totalPrice = 0;
//     let avgDecorFactor = 0;

//     for (let box of checkboxElements) {
//       if (box.checked) {
//         products.push(box.parentNode.parentNode.querySelector('p:nth-of-type(1)').textContent);
//         let currentProductPrice = Number(box.parentNode.parentNode.querySelector('td:nth-of-type(2n + 1) > p').textContent);
//         let decorFactorValue = Number(box.parentNode.parentNode.querySelector('td:nth-of-type(4n) > p').textContent);
//         totalPrice += currentProductPrice;
//         avgDecorFactor += decorFactorValue;
//       }
//     };
//     textAreaElements[1].value = `Bought furniture: ${products.join(', ')}\n`;
//     textAreaElements[1].value += `Total price: ${totalPrice.toFixed(2)}\n`;
//     avgDecorFactor / products.length >= 0 ? textAreaElements[1].value += `Average decoration factor: ${avgDecorFactor / products.length}` : textAreaElements[1].value += `Average decoration factor: ${avgDecorFactor}`;
//   };
//   genButton.addEventListener('click', onGenerateClick);
//   buyButton.addEventListener('click', onBuyClick);
// }
// // [{ "name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2 }]


function solve() {
  const td = (content) => e('td', {}, content);
  const img = (src) => e('img', { src });
  const check = () => e('input', { type: 'checkbox' });

  const [input, output] = document.querySelectorAll('textarea');
  const [generateBtn, buyBtn] = document.querySelectorAll('button');
  const table = document.querySelector('tbody');

  generateBtn.addEventListener('click', parseInput);
  buyBtn.addEventListener('click', summary);

  let data = [];

  function parseInput() {
    const json = input.value;
    data = JSON.parse(json);

    for (let entry of data) {
      table.append(createRow(entry));
    }
  }

  function createRow(entry) {
    const row = document.createElement('tr');
    row.append(td(img(entry.img)));
    row.append(td(document.createTextNode(entry.name)));
    row.append(td(document.createTextNode(entry.price)));
    row.append(td(document.createTextNode(entry.decFactor)));

    const checkbox = check();

    row.append(td(checkbox));
    
    entry.checked = () => checkbox.checked;

    return row;
  }

  function summary() {
    const selected = data.filter(e => e.checked());

    const result = [
      `Bought furniture: ${selected.map(e => e.name).join(', ')}`,
      `Total price: ${selected.reduce((a, c) => a + Number(c.price), 0).toFixed(2)}`,
      `Average decoration factor: ${selected.reduce((a, c, i, arr) => a + Number(c.decFactor) / arr.length, 0).toFixed(2)}`
    ];

    output.value = result.join('\n');
  }

  function e(type, attr, content) {
    const result = document.createElement(type);

    Object.assign(result, attr);

    if (content) {
      result.append(content);
    }

    return result;
  }
}
// [{ "name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2 }]