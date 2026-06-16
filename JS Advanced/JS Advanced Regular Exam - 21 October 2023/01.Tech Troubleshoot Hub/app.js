window.addEventListener('load', solution);

function solution() {
  const employeeElement = document.getElementById('employee');
  const categoryElement = document.getElementById('category');
  const urgencyElement = document.getElementById('urgency');
  const teamElement = document.getElementById('team');
  const descriptionElement = document.getElementById('description');

  const addBtnElement = document.getElementById('add-btn');
  const previewListElement = document.querySelector('.preview-list');
  const pendingListElement = document.querySelector('.pending-list');
  const resolvedListElement = document.querySelector('.resolved-list');

  addBtnElement.addEventListener('click', onAddClick);

  function onAddClick(e) {
    e.preventDefault();

    const inputElements = [
      employeeElement,
      categoryElement,
      urgencyElement,
      teamElement,
      descriptionElement,
    ];

    if (inputElements.some(element => element.value === '')) {
      return;
    }

    previewListElement.appendChild(createLiElement(
      employeeElement.value,
      categoryElement.value,
      urgencyElement.value,
      teamElement.value,
      descriptionElement.value,
    ));

    inputElements.forEach(element => element.value = '');
    addBtnElement.setAttribute('disabled', 'disabled');
  }

  function createLiElement(name, category, urgency, team, description) {
    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = `From: ${name}`;

    const categoryParagraph = document.createElement('p');
    categoryParagraph.textContent = `Category: ${category}`;

    const urgencyParagraph = document.createElement('p');
    urgencyParagraph.textContent = `Urgency: ${urgency}`;

    const teamParagraph = document.createElement('p');
    teamParagraph.textContent = `Assigned to: ${team}`;

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = `Description: ${description}`;

    const articleElement = document.createElement('article');
    articleElement.appendChild(nameParagraph);
    articleElement.appendChild(categoryParagraph);
    articleElement.appendChild(urgencyParagraph);
    articleElement.appendChild(teamParagraph);
    articleElement.appendChild(descriptionParagraph);

    const editButtonElement = createNewButton('edit-btn', 'Edit');
    const continueButtonElement = createNewButton('continue-btn', 'Continue');

    const liElement = document.createElement('li');
    liElement.classList.add('problem-content');
    liElement.appendChild(articleElement);
    liElement.appendChild(editButtonElement);
    liElement.appendChild(continueButtonElement);

    editButtonElement.addEventListener('click', (e) => {
      employeeElement.value = name;
      categoryElement.value = category;
      urgencyElement.value = urgency;
      teamElement.value = team;
      descriptionElement.value = description;

      e.currentTarget.parentNode.remove();
      addBtnElement.removeAttribute('disabled');
    });

    continueButtonElement.addEventListener('click', (e) => {
      const resolvedButtonElement = createNewButton('resolve-btn', 'Resolved');

      liElement.appendChild(resolvedButtonElement);
      pendingListElement.appendChild(liElement);

      editButtonElement.remove();
      continueButtonElement.remove();

      resolvedButtonElement.addEventListener('click', (e) => {
        const clearButtonElement = createNewButton('clear-btn', 'Clear');

        liElement.appendChild(clearButtonElement);
        resolvedListElement.appendChild(liElement);

        resolvedButtonElement.remove();

        clearButtonElement.addEventListener('click', (e) => {
          e.currentTarget.parentNode.remove();
        });
      });
    });

    return liElement;
  }

  function createNewButton(clsName, txtContent) {
    const newButton = document.createElement('button');
    
    newButton.classList.add(clsName);
    newButton.textContent = txtContent;

    return newButton;
  }
}




