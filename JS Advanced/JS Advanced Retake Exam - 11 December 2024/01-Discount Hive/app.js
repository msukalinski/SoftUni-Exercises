window.addEventListener('load', solve);

function solve() {
    const discountElement = document.querySelector('#discount');
    const dateElement = document.querySelector('#date');
    const storeElement = document.querySelector('#store');
    const productElement = document.querySelector('#product');
    const codeElement = document.querySelector('#code');
    const addBtnElement = document.querySelector('#add-btn');
    const checkList = document.querySelector('#check-list');
    const validateList = document.querySelector('#validate-list');
    const discountList = document.querySelector('#discount-list');
    const clearBtn = document.querySelector('#clear');

    addBtnElement.addEventListener('click', addDiscount);

    function addDiscount() {
        const inputFields = [
            discountElement,
            dateElement,
            storeElement,
            productElement,
            codeElement,
        ];

        if (inputFields.some(e => e.value === '')) {
            return;
        }

        const liElement = document.createElement('li');
        liElement.classList.add('discount-content');

        const articleElement = document.createElement('article');

        const expire = document.createElement('p');
        const expireVal = dateElement.value;
        expire.textContent = `Expire: ${expireVal}`;

        const store = document.createElement('p');
        const storeVal = storeElement.value;
        store.textContent = `Store: ${storeVal}`;

        const product = document.createElement('p');
        const productVal = productElement.value;
        product.textContent = `Product: ${productVal}`;

        const code = document.createElement('p');
        const codeVal = codeElement.value;
        code.textContent = `Code: ${codeVal}`;

        const discount = document.createElement('p');
        const discountVal = discountElement.value;
        discount.textContent = `Discount: ${discountVal}%`;

        articleElement.appendChild(expire);
        articleElement.appendChild(store);
        articleElement.appendChild(product);
        articleElement.appendChild(code);
        articleElement.appendChild(discount);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');

        const continueBtn = document.createElement('button');
        continueBtn.textContent = 'Continue';
        continueBtn.classList.add('continue-btn');

        inputFields.forEach(field => field.value = '');

        addBtnElement.setAttribute('disabled', 'disabled');

        liElement.appendChild(articleElement);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        checkList.appendChild(liElement);

        editBtn.addEventListener('click', () => {
            dateElement.value = expireVal;
            storeElement.value = storeVal;
            productElement.value = productVal;
            codeElement.value = codeVal;
            discountElement.value = Number(discountVal);

            liElement.remove();

            addBtnElement.removeAttribute('disabled');
        });

        continueBtn.addEventListener('click', () => {
            liElement.removeChild(editBtn);
            liElement.removeChild(continueBtn);

            const validateBtn = document.createElement('button');
            validateBtn.textContent = 'Validate';
            validateBtn.classList.add('validate-btn');

            liElement.appendChild(validateBtn);

            validateList.appendChild(liElement);

            validateBtn.addEventListener('click', (e) => {
                e.preventDefault();

                liElement.removeChild(validateBtn);

                discountList.appendChild(liElement);

                addBtnElement.removeAttribute('disabled');
            });
        });
    }

    clearBtn.addEventListener('click', (e) => {
        e.preventDefault();

        discountList.innerHTML = '';
    });
}
