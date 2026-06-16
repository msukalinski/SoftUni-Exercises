const notificationElement = document.querySelector('.notification');
const errorMessageElement = notificationElement.querySelector('.msg');

export const notification = (msg) => {
    notificationElement.style.display = 'block';
    errorMessageElement.textContent = msg;

    setTimeout(hide, 3000);
}

function hide() {
    notificationElement.style.display = 'none';
}