function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

function setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

function hideContent() {
    const mainContent = document.querySelectorAll('main>div');

    mainContent.forEach(content => content.style.display = 'none');
}

function submitHandler(callback) {
    return function (e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        callback(data, e.currentTarget);
    }
}

export { getUserData, setUserData, hideContent, submitHandler };