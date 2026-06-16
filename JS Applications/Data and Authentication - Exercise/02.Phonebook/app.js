function attachEvents() {
    const phoneBook = document.getElementById('phonebook');
    const loadButton = document.getElementById('btnLoad');
    const createButton = document.getElementById('btnCreate');

    const personElement = document.getElementById('person');
    const phoneElement = document.getElementById('phone');

    loadButton.addEventListener('click', onLoadClick);
    createButton.addEventListener('click', onCreateClick);

    function onLoadClick(e) {
        getRequest();
    }

    function onCreateClick(e) {
        const url = 'http://localhost:3030/jsonstore/phonebook';

        if (!personElement.value || !phoneElement.value) {
            return;
        }

        fetch(url, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ person: personElement.value, phone: phoneElement.value })
        })
        .then(response => {
            if(!response.ok) {
                throw new Error('Error');
            }

            return response.json();
        })
        .catch(error => {
            alert(error.message);
        });

        getRequest();

        personElement.value = '';
        phoneElement.value = '';
    }

    function onDeleteClick(e) {
        const url = 'http://localhost:3030/jsonstore/phonebook';
        const liElement = e.currentTarget.parentNode;

        fetch(`${url}/${liElement.id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if(!response.ok) {
                throw new Error('Error');
            }
            
            return response.json();
        })
        .catch(error => {
            alert(error.message);
        });

        liElement.remove();
    }

    function getRequest() {
        const url = 'http://localhost:3030/jsonstore/phonebook';

        fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error('Error');
            }
            
            return response.json();
        })
        .then(data => {
            phoneBook.innerHTML = '';

            Object.values(data).forEach(curContact => {
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('button');

                const liElement = document.createElement('li');
                liElement.id = curContact._id;
                liElement.textContent = `${curContact.person}: ${curContact.phone}`;
                liElement.appendChild(deleteButton);

                deleteButton.addEventListener('click', onDeleteClick);

                phoneBook.appendChild(liElement);
            });
        })
        .catch(error => {
            alert(error.message);
        });
    }
}
attachEvents();