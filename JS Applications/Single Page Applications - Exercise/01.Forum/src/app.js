import { post, get, endpoints } from './api.js';
import { createComponent } from './topicComponent.js';

const createTopicForm = document.querySelector('.new-topic-border>form');
createTopicForm.addEventListener('submit', createNewTopic);

const topicContainer = document.querySelector('.topic-container');
topicContainer.addEventListener('click', onTopic);

const cancelButton = document.querySelector('.cancel');
cancelButton.addEventListener('click', (e) => {
    e.preventDefault();

    createTopicForm.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    get(endpoints.topics)
        .then(data => {
            topicContainer.replaceChildren(...Object.values(data).map(createComponent));
        })
        .catch(error => alert(error.message));
})

function createNewTopic(e) {
    e.preventDefault();

    const formData = new FormData(createTopicForm);
    const { topicName, username, postText } = Object.fromEntries(formData);

    if (!topicName || !username || !postText) {
        return alert('All fields are reuqired!');
    }

    post(endpoints.topics, { topicName, username, postText, date: new Date() })
        .then(data => {
            topicContainer.appendChild(createComponent(data));
        })
        .catch(error => {
            alert(error.message)
        });

    createTopicForm.reset();
}

function onTopic(e) {
    if (e.target.nodeName !== 'H2') {
        return;
    }
    const topicWrapper = e.target.parentNode.parentNode.parentNode;

    const postInfo = {
        name: e.target.textContent,
        id: topicWrapper.getAttribute('data-id'),
    }
    localStorage.setItem('postInfo', JSON.stringify(postInfo));

    window.location = "theme-content.html";
}
