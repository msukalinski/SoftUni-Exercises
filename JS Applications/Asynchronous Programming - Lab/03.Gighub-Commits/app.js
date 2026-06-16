function loadCommits() {
    const usernameInput = document.getElementById('username');
    const repoInput = document.getElementById('repo');
    const commitsUl = document.getElementById('commits');

    const url = `https://api.github.com/repos/${usernameInput.value}/${repoInput.value}/commits`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} (Not Found)`);
            }

            return response.json();
        })
        .then(data => {
            attachListItem(data);
        })
        .catch(error => {
            commitsUl.innerHTML = '';

            const liElement = document.createElement('li');
            liElement.textContent = error;
            
            commitsUl.appendChild(liElement);
        });

    function attachListItem(data) {
        commitsUl.innerHTML = '';

        data.forEach(element => {
            const liElement = document.createElement('li');
            liElement.textContent = `${element.commit.author.name} ${element.commit.message}`;

            commitsUl.appendChild(liElement);
        });
    }
}