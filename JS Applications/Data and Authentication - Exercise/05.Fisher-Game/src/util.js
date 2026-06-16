const userNavRef = document.querySelector('#user');
const guestNavRef = document.querySelector('#guest');
const welcomeMsgRef = document.querySelector('.email>span');
const fieldSetRef = document.querySelector('#main');
const addButtonRef = document.querySelector('.add');
const formElement = document.querySelector('form');

const endpoints = {
    catches: 'http://localhost:3030/data/catches',
    logout: 'http://localhost:3030/users/logout',
    login: 'http://localhost:3030/users/login',
    register: 'http://localhost:3030/users/register',
}

const userData = JSON.parse(localStorage.getItem('userData'));

function updateNav() {
    if (localStorage.getItem('userData')) {
        if (addButtonRef) {
            addButtonRef.removeAttribute('disabled');
        }

        userNavRef.style.display = 'inline-block';
        guestNavRef.style.display = 'none';
        welcomeMsgRef.textContent = userData.email;
    } else {
        if (addButtonRef) {
            addButtonRef.setAttribute('disabled', 'disabled');
        }

        userNavRef.style.display = 'none';
        guestNavRef.style.display = 'inline-block';
        welcomeMsgRef.textContent = 'guest';
    }
}

function postRequest(url, callback, options, location, storageUse) {
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            formElement.reset();
            return response.json();
        })
        .then(data => {
            if (storageUse) {
                localStorage.setItem('userData', JSON.stringify(data));
            }

            if (callback) {
                fieldSetRef.style.border = 'solid black 2px';
                fieldSetRef.textContent = '';
                renderLegend();
                const arrData = [data];
                callback(arrData);
            }

            if (location) {
                window.location = location;
            }
        })
        .catch(error => {
            alert(error.message);
        });
}

function getRequest(url, callback, options, updateNavi, clearStorage) {
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            if (clearStorage) {
                localStorage.clear();
                window.location = './index.html';
            }

            if (updateNavi) {
                updateNav();
            }

            if (response.statusText !== 'No Content') {
                return response.json();
            }
        })
        .then(data => {
            if (callback) {
                renderLegend();
                fieldSetRef.style.border = 'solid black 2px';
                callback(data);
            }
        })
        .catch(error => {
            alert(error);
        })
}

function renderCatches(data) {
    const divCatches = document.createElement('div');
    divCatches.id = 'catches';
    
    fieldSetRef.appendChild(divCatches);

    data.forEach(curData => {
        const isOwner = userData && curData._ownerId === userData._id;

        const divCatch = document.createElement('div');
        divCatch.classList.add('catch');

        const anglerLabel = createLabelElements('Angler');
        const anglerInput = createInputElements('text', 'angler', curData.angler);
        const weightLabel = createLabelElements('Weight');
        const weightInput = createInputElements('text', 'weight', curData.weight);
        const speciesrLabel = createLabelElements('Species');
        const speciesrInput = createInputElements('text', 'species', curData.species);
        const locationLabel = createLabelElements('Location');
        const locationInput = createInputElements('text', 'location', curData.location);
        const baitLabel = createLabelElements('Bait');
        const baitInput = createInputElements('text', 'bait', curData.bait);
        const captureTimeLabel = createLabelElements('Capture Time');
        const captureTimeInput = createInputElements('text', 'captureTime', curData.captureTime);
        const updateButton = createButton('Update', 'update', curData._id, isOwner);
        const deleteButton = createButton('Delete', 'delete', curData._id, isOwner);

        const catchElements = [
            anglerLabel,
            anglerInput,
            weightLabel,
            weightInput,
            speciesrLabel,
            speciesrInput,
            locationLabel,
            locationInput,
            baitLabel,
            baitInput,
            captureTimeLabel,
            captureTimeInput,
            updateButton,
            deleteButton
        ];

        if (!isOwner) {
            catchElements.forEach(curElement => curElement.setAttribute('disabled', 'disabled'));
        }

        catchElements.forEach(curElement => divCatch.appendChild(curElement));

        updateButton.addEventListener('click', handleUpdate);
        deleteButton.addEventListener('click', handleDelete);

        divCatches.appendChild(divCatch);
    })
}

function handleUpdate(e) {
    const catchId = e.currentTarget.getAttribute('data-id');
    const inputFields = [...e.currentTarget.parentNode.querySelectorAll('input')];
    const body = {};

    inputFields.forEach(field => body[field.className] = field.value);

    fetch(`${endpoints.catches}/${catchId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': userData.accessToken },
        body: JSON.stringify(body)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        })
        .catch(error => {
            alert(error);
        });
}

function handleDelete(e) {
    const catchId = e.currentTarget.getAttribute('data-id');

    fetch(`${endpoints.catches}/${catchId}`, {
        method: 'DELETE',
        headers: { 'X-Authorization': userData.accessToken },
    });
    e.currentTarget.parentNode.remove();
}
function createLabelElements(labelContent) {
    const labelElement = document.createElement('label');
    labelElement.textContent = labelContent;

    return labelElement;
}

function createInputElements(inputType, clasName, value) {
    const inputElement = document.createElement('input');
    inputElement.type = inputType;
    inputElement.classList.add(clasName);
    inputElement.value = value;

    return inputElement;
}

function createButton(buttonContent, clsName, id, isOwner) {
    const newButton = document.createElement('button');
    newButton.textContent = buttonContent;
    newButton.classList.add(clsName);
    newButton.setAttribute('data-id', id);

    if (!isOwner) {
        newButton.setAttribute('disabled', 'disabled');
        newButton.setAttribute('disabled', 'disabled');
    }

    return newButton;
}

function renderLegend() {
    const legendElement = document.createElement('legend');
    legendElement.textContent = 'Catches';
    fieldSetRef.appendChild(legendElement);
}

function addHandler(element, eventType, callback) {
    document.querySelector(element).addEventListener(eventType, callback);
}

export {
    updateNav,
    postRequest,
    getRequest,
    addHandler,
    renderCatches,
    handleUpdate,
    handleDelete,
    endpoints,
    fieldSetRef
}