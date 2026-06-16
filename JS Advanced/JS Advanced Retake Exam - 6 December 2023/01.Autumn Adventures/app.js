window.addEventListener('load', solve);

function solve() {
    const timeElement = document.getElementById('time')
    const dateElement = document.getElementById('date')
    const placeElement = document.getElementById('place')
    const eventElement = document.getElementById('event-name')
    const emailElement = document.getElementById('email');

    const addBtnElement = document.getElementById('add-btn');
    const checkListElement = document.getElementById('check-list');
    const upcomingListElement = document.getElementById('upcoming-list');
    const finishedListElement = document.getElementById('finished-list');
    const clearBtnElement = document.getElementById('clear');

    addBtnElement.addEventListener('click', onAddBtnClick);

    function onAddBtnClick() {
        const inputElements = [
            timeElement,
            dateElement,
            placeElement,
            eventElement,
            emailElement,
        ];

        if (inputElements.some(e => e.value === '')) {
            return;
        }

        checkListElement.appendChild(createListCheckElement(
            timeElement.value,
            dateElement.value,
            placeElement.value,
            eventElement.value,
            emailElement.value,
        ));

        inputElements.forEach(e => e.value = '');

        addBtnElement.setAttribute('disabled', 'disabled');
    }

    clearBtnElement.addEventListener('click', (e) => {
        const liContentElement = e.currentTarget.parentNode.querySelector('ul>li');

        liContentElement ? liContentElement.remove() : null;
    });

    function createListCheckElement(time, date, place, event, email) {
        const beginTime = document.createElement('p');
        beginTime.textContent = `Begins: ${date} at: ${time}`;

        const currentPlace = document.createElement('p');
        currentPlace.textContent = `In: ${place}`;

        const currentEvent = document.createElement('p');
        currentEvent.textContent = `Event: ${event}`;

        const contact = document.createElement('p');
        contact.textContent = `Contact: ${email}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(beginTime);
        articleElement.appendChild(currentPlace);
        articleElement.appendChild(currentEvent);
        articleElement.appendChild(contact);

        const editBtnElement = createNewBtn('edit-btn', 'Edit');
        const continueBtnElement = createNewBtn('continue-btn', 'Continue');

        const liElement = document.createElement('li');
        liElement.classList.add('event-content');
        liElement.appendChild(articleElement);
        liElement.appendChild(editBtnElement);
        liElement.appendChild(continueBtnElement);

        editBtnElement.addEventListener('click', (e) => {
            e.currentTarget.parentNode.remove();

            addBtnElement.removeAttribute('disabled');

            timeElement.value = time;
            dateElement.value = date;
            placeElement.value = place;
            eventElement.value = event;
            emailElement.value = email;
        });

        continueBtnElement.addEventListener('click', (e) => {
            e.currentTarget.parentNode.remove();

            for (const btn of e.currentTarget.parentNode.querySelectorAll('button')) {
                btn.remove();
            }

            const moveToFinishBtn = createNewBtn('finished-btn', 'Move to Finished');
            liElement.appendChild(moveToFinishBtn);

            upcomingListElement.appendChild(liElement);

            addBtnElement.removeAttribute('disabled');

            moveToFinishBtn.addEventListener('click', (e) => {
                e.currentTarget.parentNode.remove();

                moveToFinishBtn.remove();

                finishedListElement.appendChild(liElement);
            });
        });

        return liElement;
    }

    function createNewBtn(clsName, txtContent) {
        const newBtn = document.createElement('button');
        newBtn.classList.add(clsName);
        newBtn.textContent = txtContent;

        return newBtn;
    }
}