function createComponent(data) {
    const topicWrapper = document.createElement('div');
    topicWrapper.classList.add('topic-name-wrapper');
    topicWrapper.setAttribute('data-id', data._id);

    topicWrapper.innerHTML = `
        <div class="topic-name">
            <a href="#" class="normal">
                <h2>${data.topicName}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${data.date}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${data.username}</span></p>
                    </div>
                </div>
                
                
            </div>
        </div>
        `;
    return topicWrapper;
}

export { createComponent };