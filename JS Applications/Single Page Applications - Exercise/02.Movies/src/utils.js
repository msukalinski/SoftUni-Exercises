function getUserData() {
    const userData = localStorage.getItem('userData');

    return JSON.parse(userData);
}

function setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

function hideContent() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');
}

export { getUserData, setUserData, hideContent };