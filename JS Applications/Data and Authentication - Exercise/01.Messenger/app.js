function attachEvents() {
    const submitButton = document.getElementById('submit');
    const refreshButton = document.getElementById('refresh');
    const [author, content] = document.querySelectorAll('input[type="text"]');

    const messagesArea = document.querySelector('#messages');

    submitButton.addEventListener('click', onSubmitClick);
    refreshButton.addEventListener('click', onRefreshClick);

    function onSubmitClick(e) {
        const url = 'http://localhost:3030/jsonstore/messenger';

        if (!author.value || !content.value) {
            return;
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ author: author.value, content: content.value })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error');
                }
                return response.json();
            })
            .catch(error => {
                alert(error.messages);
            });

        author.value = '';
        content.value = '';
    }

    function onRefreshClick(e) {
        const url = 'http://localhost:3030/jsonstore/messenger';

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error');
                }
                return response.json();
            })
            .then(data => {
                displayMessages(Object.values(data));
            })
            .catch(error => {
                alert(error.messages);
            });
    }

    function displayMessages(data) {
        const messages = data.map(({ author, content }) => `${author}: ${content}`);

        messagesArea.value = messages.join('\n');
    }
}
attachEvents();