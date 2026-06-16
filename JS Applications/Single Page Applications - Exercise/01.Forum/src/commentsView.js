import { endpoints, get, post } from "./api.js";

const commentForm = document.querySelector('form');
const commentDiv = document.querySelector('.comment');
const postInfo = JSON.parse(localStorage.getItem('postInfo'));

commentForm.addEventListener('submit', onCommentPost);

document.addEventListener('DOMContentLoaded', () => {
    get(`${endpoints.topics}/${postInfo.id}`)
        .then(data => {
            commentDiv.replaceChildren(commentHeader(data));
        })
        .catch(error => {
            alert(error.message);
        });

    get(`${endpoints.comments}`)
        .then(data => {
            const filteredComments = Object.values(data).filter(comment => comment.id === postInfo.id);
            Object.values(filteredComments).forEach(comment => commentDiv.appendChild(userComment(comment)));
        })
        .catch(error => {
            alert(error.message);
        });
})

function onCommentPost(e) {
    e.preventDefault();

    const formData = new FormData(commentForm);
    const { postText, username } = Object.fromEntries(formData);

    if (!postText || !username) {
        return alert('All fields are required!');
    }

    post(endpoints.comments, { postText, username, date: new Date(), id: postInfo.id })
        .then(data => {
            commentDiv.appendChild(userComment(data));
        })
        .catch(error => {
            alert(error.message);
        });
}

function commentHeader(data) {
    const header = document.createElement('div');
    header.classList.add('header');

    header.innerHTML = `
    <img src="./static/profile.png" alt="avatar">
        <p><span>${data.username}</span> posted on <time>${data.date}</time></p>

    <p class="post-content">${data.postText}</p>`;

    return header;
}

function userComment(data) {
    const userComment = document.createElement('div');
    userComment.classList.add('user-comment');

    userComment.innerHTML = `
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <p><strong>${data.username}</strong> commented on <time>${data.date}</time></p>
            <div class="post-content">
                <p>${data.postText}</p>
            </div>
        </div>
    </div>`;

    return userComment;
} 