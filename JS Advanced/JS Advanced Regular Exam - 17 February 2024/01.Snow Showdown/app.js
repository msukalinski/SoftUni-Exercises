window.addEventListener("load", solve);

function solve() {
  const snowmanNameElement = document.getElementById('snowman-name');
  const snowmanHeightElement = document.getElementById('snowman-height');
  const locationInputElement = document.getElementById('location');
  const creatorNameElement = document.getElementById('creator-name');
  const specialAttrElement = document.getElementById('special-attribute');

  const addBtnElement = document.querySelector('.add-btn');
  const snowmanPreviewElement = document.querySelector('.snowman-preview');
  const snowListElement = document.querySelector('.snow-list');
  const mainElement = document.getElementById('hero');
  const bodyElement = document.querySelector('.body');

  addBtnElement.addEventListener('click', addButtonClick);

  function addButtonClick(e) {

    e.preventDefault();

    const inputElements = [
      snowmanNameElement,
      snowmanHeightElement,
      locationInputElement,
      creatorNameElement,
      specialAttrElement,
    ];

    if (inputElements.some(el => el.value === '')) {
      return;
    }

    snowmanPreviewElement.appendChild(createLiPreviewElement(
      snowmanNameElement.value,
      snowmanHeightElement.value,
      locationInputElement.value,
      creatorNameElement.value,
      specialAttrElement.value
    ));

    inputElements.forEach(e => e.value = '');
    addBtnElement.setAttribute('disabled', 'true');
  }

  function createLiPreviewElement(snowmanName, snowmanHeight, snowLocation, creator, specialAttr) {
    const nameElement = document.createElement('p');
    nameElement.textContent = `Name: ${snowmanName}`;

    const heightElement = document.createElement('p');
    heightElement.textContent = `Height: ${snowmanHeight}`;

    const locationElement = document.createElement('p');
    locationElement.textContent = `Location: ${snowLocation}`;

    const creatorElement = document.createElement('p');
    creatorElement.textContent = `Creator: ${creator}`;

    const specialElement = document.createElement('p');
    specialElement.textContent = `Attribute: ${specialAttr}`;

    const articleElement = document.createElement('article');
    articleElement.appendChild(nameElement);
    articleElement.appendChild(heightElement);
    articleElement.appendChild(locationElement);
    articleElement.appendChild(creatorElement);
    articleElement.appendChild(specialElement);

    const editBtn = createButton('edit-btn', 'Edit');
    const nextBtn = createButton('next-btn', 'Next');

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(nextBtn);

    const liElement = document.createElement('li');
    liElement.classList.add('snowman-info');
    liElement.appendChild(articleElement);
    liElement.appendChild(btnContainer);

    editBtn.addEventListener('click', (e) => {
      snowmanNameElement.value = snowmanName;
      snowmanHeightElement.value = snowmanHeight;
      locationInputElement.value = snowLocation;
      creatorNameElement.value = creator;
      specialAttrElement.value = specialAttr;

      addBtnElement.removeAttribute('disabled');
      e.currentTarget.parentNode.parentNode.remove();
    });

    nextBtn.addEventListener('click', (e) => {
      e.currentTarget.parentNode.remove();

      const sendBtn = createButton('send-btn', 'Send');
      articleElement.appendChild(sendBtn);

      liElement.classList.replace('snowman-info', 'snowman-content');
      liElement.appendChild(articleElement);

      snowListElement.appendChild(liElement);

      sendBtn.addEventListener('click', (e) => {
        mainElement.remove();

        const imgElement = document.getElementById('back-img');
        imgElement.removeAttribute('hidden');

        const backBtn = createButton('back-btn', 'Back')
        bodyElement.appendChild(backBtn);

        backBtn.addEventListener('click', (e) => {
          location.reload();
        });
      });
    });

    return liElement;
  }

  function createButton(clsName, txtContent) {
    const newBtn = document.createElement('button');
    newBtn.classList.add(clsName);
    newBtn.textContent = txtContent;

    return newBtn;
  }
}