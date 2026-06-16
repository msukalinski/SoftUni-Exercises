function attachEvents() {
    const loadPostsButton = document.getElementById('btnLoadPosts');
    const selectPosts = document.getElementById('posts');
    const viewPostButton = document.getElementById('btnViewPost');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    loadPostsButton.addEventListener('click', loadPosts);
    viewPostButton.addEventListener('click', viewPost);

    let currentLoadData = [];

    function loadPosts(e) {
        const url = 'http://localhost:3030/jsonstore/blog/posts';

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error');
                }
                return response.json();
            })
            .then(data => {
                attachOptions(Object.values(data));
                currentLoadData = Object.values(data);
            })
            .catch(error => {
                alert(error.message);
            });
    }

    function viewPost(e) {
        const postOptions = e.currentTarget.parentNode.querySelectorAll('option');
        const findSelectedOption = Array.from(postOptions).find(element => element.selected);
        const filteredBodyData = currentLoadData.filter(element => element.id === findSelectedOption.value);

        postTitle.textContent = findSelectedOption.textContent;
        postBody.textContent = filteredBodyData.shift().body;

        const url = 'http://localhost:3030/jsonstore/blog/comments';

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error');
                }
                return response.json();
            })
            .then(data => {
                const filterCommentsById = Object.values(data).filter(element => element.postId === findSelectedOption.value);
                displayComments(filterCommentsById);
            })
            .catch(error => {
                alert(error.message);
            });
    }

    function attachOptions(data) {
        selectPosts.innerText = '';

        data.forEach(curPost => {
            const postOption = document.createElement('option');
            postOption.value = curPost.id;
            postOption.textContent = curPost.title;

            selectPosts.appendChild(postOption);
        });
    }

    function displayComments(data) {
        postComments.innerHTML = '';

        data.forEach(curComment => {
            const commentLi = document.createElement('li');
            commentLi.setAttribute('id', curComment.postId);
            commentLi.textContent = curComment.text;

            postComments.appendChild(commentLi);
        });
    }
}
attachEvents();