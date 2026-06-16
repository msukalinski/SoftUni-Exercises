// function solve() {
//     const taskElement = document.getElementById('task');
//     const descriptionElement = document.getElementById('description');
//     const dueDateEelement = document.getElementById('date');

//     const addButtonElement = document.getElementById('add');
//     const h1OpenTab = document.querySelector('.orange');
//     const h1CompleteTab = document.querySelector('.green');

//     const openTabElement = h1OpenTab.parentNode.parentNode.querySelector('div:nth-of-type(2)');
//     const inProgressTabElement = document.querySelector('#in-progress');
//     const completeTabElement = h1CompleteTab.parentNode.parentNode.querySelector('div:nth-of-type(2)');

//     addButtonElement.addEventListener('click', onAddButtonClick);

//     function onAddButtonClick(e) {
//         e.preventDefault();

//         const inputElements = [
//             taskElement,
//             descriptionElement,
//             dueDateEelement,
//         ];

//         if (inputElements.some(element => element === '')) {
//             return;
//         }

//         openTabElement.appendChild(createArticleElement(
//             taskElement.value,
//             descriptionElement.value,
//             dueDateEelement.value,
//         ));
//     }

//     function createArticleElement(task, description, dueDate) {
//         const h3TaskElement = document.createElement('h3');
//         h3TaskElement.textContent = task;

//         const pDescriptionElement = document.createElement('p');
//         pDescriptionElement.textContent = `Description: ${description}`;

//         const pDueDateElement = document.createElement('p');
//         pDueDateElement.textContent = `Due Date: ${dueDate}`;

//         const buttonElements = createNewButtons('green', 'Start', 'red', 'Delete');

//         const articleInnerElements = [
//             h3TaskElement,
//             pDescriptionElement,
//             pDueDateElement,
//             buttonElements,
//         ];

//         const articleElement = document.createElement('article');

//         articleInnerElements.forEach(element => articleElement.appendChild(element));

//         const startButtonElement = buttonElements.querySelector('.green');
//         startButtonElement.addEventListener('click', onStartBtnClick);

//         const deleteButtonElement = buttonElements.querySelector('.red');
//         deleteButtonElement.addEventListener('click', (e) => {
//             articleElement.remove();
//         });

//         return articleElement;
//     }


//     function onStartBtnClick(e) {
//         const articleElement = e.currentTarget.parentNode.parentNode;

//         articleElement.querySelector('div').remove();

//         const buttonElements = createNewButtons('red', 'Delete', 'orange', 'Finish');
//         articleElement.appendChild(buttonElements);

//         inProgressTabElement.appendChild(articleElement);

//         const finishButtonElement = buttonElements.querySelector('.orange');
//         finishButtonElement.addEventListener('click', onFinishButtonClick);

//         const deleteButtonElement = buttonElements.querySelector('.red');
//         deleteButtonElement.addEventListener('click', (e) => {
//             articleElement.remove();
//         });
//     }

//     function onFinishButtonClick(e) {
//         const articleElement = e.currentTarget.parentNode.parentNode;
//         articleElement.querySelector('div').remove();

//         completeTabElement.appendChild(articleElement);
//     }

//     function createNewButtons(firstClsName, firstTxtContent, secondClsName, secondTxtName) {
//         const firstButtonElement = document.createElement('button');
//         firstButtonElement.classList.add(firstClsName);
//         firstButtonElement.textContent = firstTxtContent;

//         const secondButtonElement = document.createElement('button');
//         secondButtonElement.classList.add(secondClsName);
//         secondButtonElement.textContent = secondTxtName;

//         const btnContainerElement = document.createElement('div');
//         btnContainerElement.classList.add('flex');
//         btnContainerElement.appendChild(firstButtonElement);
//         btnContainerElement.appendChild(secondButtonElement);

//         return btnContainerElement;
//     }
// }


function solve() {
    const taskElement = document.getElementById('task');
    const descriptionElement = document.getElementById('description');
    const dueDateElement = document.getElementById('date');

    const addButtonElement = document.getElementById('add');
    const h1OpenTab = document.querySelector('.orange');
    const h1CompleteTab = document.querySelector('.green');

    const openTabElement = h1OpenTab.parentNode.parentNode.querySelector('div:nth-of-type(2)');
    const inProgressTabElement = document.getElementById('in-progress');
    const completeTabElement = h1CompleteTab.parentNode.parentNode.querySelector('div:nth-of-type(2)');

    addButtonElement.addEventListener('click', onAddButtonClick);

    function onAddButtonClick(event) {
        event.preventDefault();

        const inputElements = [taskElement, descriptionElement, dueDateElement];

        if (inputElements.some(element => element === '')) {
            return;
        }

        openTabElement.append(createArticleElement(
            taskElement.value,
            descriptionElement.value,
            dueDateElement.value,
        ));
    }

    function createArticleElement(task, description, dueDate){
        const h3TaskElement = document.createElement('h3');
        h3TaskElement.textContent = task;

        const pDescriptionElement = document.createElement('p');
        pDescriptionElement.textContent = `Description: ${description}`;

        const pDueDateElement = document.createElement('p');
        pDueDateElement.textContent = `Due Date: ${dueDate}`;

        const buttonElements = createNewButtons ('green', 'Start', 'red', 'Delete');

        const articleInnerElements = [h3TaskElement, pDescriptionElement, pDueDateElement, buttonElements];

        const articleElement = document.createElement('article');

        articleInnerElements.forEach(element => articleElement.append(element));

        const startButtonElement = buttonElements.querySelector('.green');
        startButtonElement.addEventListener('click', onStartBtnClick);

        const deleteButtonElement = buttonElements.querySelector('.red');
        deleteButtonElement.addEventListener('click', (event) => articleElement.remove());

        return articleElement;
    }

    function onStartBtnClick (event){
        const articleElement = event.currentTarget.parentNode.parentNode;

        articleElement.querySelector('div').remove();

        const buttonElements = createNewButtons('red', 'Delete', 'orange', 'Finish');
        articleElement.append(buttonElements);

        inProgressTabElement.append(articleElement);

        const finishButtonElement = buttonElements.querySelector('.orange');
        finishButtonElement.addEventListener('click', onFinishButtonClick);

        const deleteButtonElement = buttonElements.querySelector('.red');
        deleteButtonElement.addEventListener('click', (event) => articleElement.remove());
    }

    function onFinishButtonClick (event){
        const articleElement = event.currentTarget.parentNode.parentNode;
        articleElement.querySelector('div').remove();

        completeTabElement.append(articleElement);
    }

    function createNewButtons (firstClsName, firstTxtContent, secondClsName, secondTxtContent){
        const firstButtonElement = document.createElement('button');
        firstButtonElement.classList.add(firstClsName);
        firstButtonElement.textContent = firstTxtContent;
        
        const secondButtonElement = document.createElement('button');
        secondButtonElement.classList.add(secondClsName);
        secondButtonElement.textContent = secondTxtContent;

        const btnContainerElement = document.createElement('div');
        btnContainerElement.classList.add('flex');
        btnContainerElement.append(firstButtonElement);
        btnContainerElement.append(secondButtonElement);

        return btnContainerElement;
    }
}