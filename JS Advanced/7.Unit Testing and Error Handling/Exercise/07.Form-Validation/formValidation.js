function validate() {
    let buttonElement = document.querySelector('#submit')
    let usernameFieldElement = document.querySelector('#username');
    let emailFieldElement = document.querySelector('#email');
    let passwordFieldElement = document.querySelector('#password');
    let confirmPassFieldElement = document.querySelector('#confirm-password');
    let companyCheckElement = document.querySelector('#company');
    let companyHiddenElement = document.querySelector('#companyInfo');
    let companyNumberElement = document.querySelector('#companyNumber');
    let validElement = document.querySelector('#valid');

    let usernamePattern = /^[A-Za-z0-9]{3,20}$/gm;
    let mailPattern = /\w+@[a-z]+\.[a-z]+/gm;
    let passwordPattern = /^\w{5,15}$/gm;
    let companyNumPattern = /^\d{4}$/gm;

    let onSubmit = (e) => {
        e.preventDefault()
        let userMatch = usernameFieldElement.value.match(usernamePattern);
        let mailMatch = emailFieldElement.value.match(mailPattern);
        let passMatch = passwordFieldElement.value.match(passwordPattern);
        let companyNumMatch = companyNumberElement.value.match(companyNumPattern);

        !userMatch ? usernameFieldElement.style.borderColor = 'red' : usernameFieldElement.style.borderColor = '';
        !mailMatch ? emailFieldElement.style.borderColor = 'red' : emailFieldElement.style.borderColor = '';
        !passMatch ? passwordFieldElement.style.borderColor = 'red' : passwordFieldElement.style.borderColor = '';

        let passConfirm = confirmPassFieldElement.value;
        let password = passwordFieldElement.value;

        passConfirm !== password || !passConfirm ? confirmPassFieldElement.style.borderColor = 'red' : confirmPassFieldElement.style.borderColor = '';

        !companyNumMatch ? companyNumberElement.style.borderColor = 'red' : companyNumberElement.style.borderColor = '';

        if (userMatch && mailMatch && passMatch && passConfirm === password) {
            validElement.style.display = 'block';

            companyCheckElement.checked && !companyNumMatch ? validElement.style.display = 'none' : validElement.style.display = 'block';

        } else {
            validElement.style.display = 'none';
        }
    }
    buttonElement.addEventListener('click', onSubmit);

    let onCheck = (e) => {
        if (companyCheckElement.checked) {
            companyHiddenElement.style.display = 'block';
            validElement.style.display = 'none';
        } else {
            companyHiddenElement.style.display = 'none';
            
        }
    }
    companyCheckElement.addEventListener('change', onCheck);
}