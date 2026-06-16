import { updateNav, getRequest, postRequest, addHandler, renderCatches, fieldSetRef, endpoints } from "./util.js";

updateNav();

addHandler('#logout', 'click', onLogout);
addHandler('.load', 'click', onLoad);
addHandler('#addForm', 'submit', onAddSubmit);

function onLogout(e) {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem('userData'));

    const options = {
        method: 'GET',
        headers: {
            'X-Authorization': data.accessToken
        }
    }
    getRequest(endpoints.logout, null, options, true, true);
}

function onLoad(e) {
    fieldSetRef.innerHTML = '';
    getRequest(endpoints.catches, renderCatches);
}

function onAddSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const angler = formData.get('angler');
    const weight = formData.get('weight');
    const species = formData.get('species');
    const location = formData.get('location');
    const bait = formData.get('bait');
    const captureTime = formData.get('captureTime');

    const catchData = { angler, weight, species, location, bait, captureTime };
    const inputFields = Object.values(catchData);

    if (inputFields.some(curField => !curField)) {
        return;
    }

    const userData = JSON.parse(localStorage.getItem('userData'));

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.accessToken
        },
        body: JSON.stringify(catchData)
    }
    postRequest(endpoints.catches, renderCatches, options);
}