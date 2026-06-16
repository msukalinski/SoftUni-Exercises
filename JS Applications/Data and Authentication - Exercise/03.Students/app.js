const [firstName, lastName, facultyNumber, grade] = document.querySelectorAll('input');
const tableBody = document.querySelector('table>tbody');
const submitButton = document.querySelector('#submit');

const url = 'http://localhost:3030/jsonstore/collections/students';

submitButton.addEventListener('click', onSubmitClick);

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error');
        }

        return response.json();
    })
    .then(data => {
        Object.values(data).forEach(curStudent => {
            const { firstName, lastName, facultyNumber, grade } = curStudent;

            createTableRow(firstName, lastName, facultyNumber, grade);
        });
    })
    .catch(error => {
        alert(error.message);
    });

function onSubmitClick(e) {
    e.preventDefault();

    const inputElements = [firstName, lastName, facultyNumber, grade];

    if (inputElements.some(e => !e.value)) {
        return;
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName.value,
            lastName: lastName.value,
            facultyNumber: facultyNumber.value,
            grade: grade.value
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }

            return response.json();
        })
        .then(data => {
            createTableRow(data.firstName, data.lastName, data.facultyNumber, data.grade);

            inputElements.forEach(e => e.value = '');
        })
        .catch(error => {
            alert(error.message);
        });
}

function createTableRow(firstName, lastName, facultyNum, grade) {
    const tableRow = document.createElement('tr');

    const nameElement = document.createElement('td');
    nameElement.textContent = firstName;

    const lastNameElement = document.createElement('td');
    lastNameElement.textContent = lastName;

    const facultyNumElement = document.createElement('td');
    facultyNumElement.textContent = facultyNum;

    const gradeElement = document.createElement('td');
    gradeElement.textContent = grade;

    tableRow.appendChild(nameElement);
    tableRow.appendChild(lastNameElement);
    tableRow.appendChild(facultyNumElement);
    tableRow.appendChild(gradeElement);

    tableBody.appendChild(tableRow);
}