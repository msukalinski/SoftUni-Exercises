function validate() {
    let inputFieldElement = document.getElementById('email');

    let mailPattern = /\w+@[a-z]+.[a-z]+/gm;

    inputFieldElement.addEventListener('change', () => {
        !mailPattern.test(inputFieldElement.value) && inputFieldElement.value ? inputFieldElement.className = 'error' : inputFieldElement.className = 'none';
    });
}