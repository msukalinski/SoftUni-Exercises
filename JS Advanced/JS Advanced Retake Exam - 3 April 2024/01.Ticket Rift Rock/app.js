window.addEventListener("load", solve);

function solve() {
    const numOfTicketsElement = document.getElementById('num-tickets');
    const seatingPrefElement = document.getElementById('seating-preference');
    const fullNameElement = document.getElementById('full-name');
    const emailElement = document.getElementById('email');
    const phoneNumberElements = document.getElementById('phone-number');

    const purchaseBtnElement = document.getElementById('purchase-btn');
    const previewList = document.getElementById('ticket-preview');
    const purchaseList = document.getElementById('ticket-purchase');

    purchaseBtnElement.addEventListener('click', onPurchaseClick);

    function onPurchaseClick() {
        const inputElements = [
            numOfTicketsElement,
            seatingPrefElement,
            fullNameElement,
            emailElement,
            phoneNumberElements,
        ];

        if (inputElements.some(input => input.value === '' || input.value === 'seating-preference')) {
            return;
        }

        const previewElement = createPreviewElement(
            numOfTicketsElement.value,
            seatingPrefElement.value,
            fullNameElement.value,
            emailElement.value,
            phoneNumberElements.value,
        );

        previewList.appendChild(previewElement);

        purchaseBtnElement.setAttribute('disabled', 'disabled');

        inputElements.forEach(el => el.value = '');
    }

    function createPreviewElement(count, preference, name, email, phoneNumber) {
        const countElement = document.createElement('p');
        countElement.textContent = `Count: ${count}`;

        const preferenceElement = document.createElement('p');
        preferenceElement.textContent = `Preference: ${preference}`;

        const nameElement = document.createElement('p');
        nameElement.textContent = `To: ${name}`;

        const innerEmailElement = document.createElement('p');
        innerEmailElement.textContent = `Email: ${email}`;

        const phoneElement = document.createElement('p');
        phoneElement.textContent = `Phone Number: ${phoneNumber}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(countElement);
        articleElement.appendChild(preferenceElement);
        articleElement.appendChild(nameElement);
        articleElement.appendChild(innerEmailElement);
        articleElement.appendChild(phoneElement);

        const editBtnElement = createButton('edit-btn', 'Edit');
        const nextBtnElement = createButton('next-btn', 'Next');

        const btnContainerElement = document.createElement('div');
        btnContainerElement.classList.add('btn-container');
        btnContainerElement.appendChild(editBtnElement);
        btnContainerElement.appendChild(nextBtnElement);

        const listElement = document.createElement('li');
        listElement.classList.add('ticket-purchase');
        listElement.appendChild(articleElement);
        listElement.appendChild(btnContainerElement);

        editBtnElement.addEventListener('click', (e) => {
            numOfTicketsElement.value = count;
            seatingPrefElement.value = preference;
            fullNameElement.value = name;
            emailElement.value = email;
            phoneNumberElements.value = phoneNumber;

            e.currentTarget.parentNode.parentNode.remove();
            purchaseBtnElement.removeAttribute('disabled');
        });

        nextBtnElement.addEventListener('click', (e) => {
            e.currentTarget.parentNode.parentNode.remove();

            const buyBtnElement = createButton('buy-btn', 'Buy');
            articleElement.appendChild(buyBtnElement);

            const purchaseListElement = document.createElement('li');
            purchaseListElement.appendChild(articleElement);

            purchaseList.appendChild(purchaseListElement);

            buyBtnElement.addEventListener('click', () => {
                purchaseListElement.remove();

                const h2Element = document.createElement('h2');
                h2Element.textContent = 'Thank you for your purchase!';

                const backBtnElement = createButton('back-btn', 'Back');

                const bottomContentElement = document.querySelector('.bottom-content');
                bottomContentElement.appendChild(h2Element);
                bottomContentElement.appendChild(backBtnElement);

                backBtnElement.addEventListener('click', () => {
                    location.reload();
                });
            });
        });

        return listElement;
    }

    function createButton(clsName, btnContent) {
        const newButton = document.createElement('button');
        newButton.classList.add(clsName);
        newButton.textContent = btnContent;

        return newButton;
    }
}