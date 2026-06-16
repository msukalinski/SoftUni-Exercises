window.addEventListener('load', solve);

function solve() {
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const fromDateElement = document.getElementById('from-date');
    const toDateElement = document.getElementById('to-date');

    const nextButtonElement = document.getElementById('next-btn');
    const infoListElement = document.querySelector('.info-list');
    const confirmListElement = document.querySelector('.confirm-list');
    const h1StatusElement = document.getElementById('status');

    nextButtonElement.addEventListener('click', onNextBtnClick);

    function onNextBtnClick(e) {
        e.preventDefault();

        const inputElements = [
            firstNameElement,
            lastNameElement,
            fromDateElement,
            toDateElement,
        ];

        if (inputElements.some(element => element.value === '')) {
            return;
        }

        const fromDate = new Date(fromDateElement.value);
        const toDate = new Date(toDateElement.value);

        if (fromDate >= toDate) {
            return;
        }

        infoListElement.appendChild(createLiElement(
            firstNameElement.value,
            lastNameElement.value,
            fromDateElement.value,
            toDateElement.value,
        ));

        inputElements.forEach(element => element.value = '');

        nextButtonElement.setAttribute('disabled', 'disabled');
    }

    function createLiElement(firstName, lastName, fromDate, toDate) {
        const nameH3Element = document.createElement('h3');
        nameH3Element.textContent = `Name: ${firstName} ${lastName}`;

        const fromDateParagraphElement = document.createElement('p');
        fromDateParagraphElement.textContent = `From date: ${fromDate}`;

        const toDateParagraphElement = document.createElement('p');
        toDateParagraphElement.textContent = `To date: ${toDate}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(nameH3Element);
        articleElement.appendChild(fromDateParagraphElement);
        articleElement.appendChild(toDateParagraphElement);

        const editButtonElement = createNewButton('edit-btn', 'Edit');
        const continueButtonElement = createNewButton('continue-btn', 'Continue');

        const liElement = document.createElement('li');
        liElement.classList.add('vacation-content');
        liElement.appendChild(articleElement);
        liElement.appendChild(editButtonElement);
        liElement.appendChild(continueButtonElement);

        editButtonElement.addEventListener('click', (e) => {
            e.currentTarget.parentNode.remove();
            nextButtonElement.removeAttribute('disabled');

            firstNameElement.value = firstName;
            lastNameElement.value = lastName;
            fromDateElement.value = fromDate;
            toDateElement.value = toDate;
        });

        continueButtonElement.addEventListener('click', (e) => {
            editButtonElement.remove();
            continueButtonElement.remove();

            const confirmButtonElement = createNewButton('confirm-btn', 'Confirm');
            const cancelButtonElement = createNewButton('cancel-btn', 'Cancel');

            liElement.appendChild(confirmButtonElement);
            liElement.appendChild(cancelButtonElement);
            confirmListElement.appendChild(liElement);

            confirmButtonElement.addEventListener('click', (e) => {
                liElement.remove();
                nextButtonElement.removeAttribute('disabled');

                h1StatusElement.classList.add('vacation-confirmed');
                h1StatusElement.textContent = 'Vacation Requested';
            });

            cancelButtonElement.addEventListener('click', (e) => {
                liElement.remove();
                nextButtonElement.removeAttribute('disabled');

                h1StatusElement.classList.add('vacation-cancelled');
                h1StatusElement.textContent = 'Cancelled Vacation';
            });

            h1StatusElement.addEventListener('click', (e) => {
                location.reload();
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