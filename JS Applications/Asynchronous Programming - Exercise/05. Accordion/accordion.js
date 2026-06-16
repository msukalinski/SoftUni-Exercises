function solution() {
    const mainSection = document.getElementById('main');
    mainSection.innerHTML = '';

    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            createArticleHeads(data);
        })
        .catch(error => {
            alert("Couldn't fetch article details", error);
        });

    function createArticleHeads(data) {
        data.forEach(curArticle => {
            const accordionDiv = document.createElement('div');
            accordionDiv.classList.add('accordion');

            const headDiv = document.createElement('div');
            headDiv.classList.add('head');

            const articleContent = document.createElement('span');
            articleContent.textContent = curArticle.title;

            const moreContentButton = document.createElement('button');
            moreContentButton.classList.add('button');
            moreContentButton.id = curArticle._id;
            moreContentButton.textContent = 'More';

            headDiv.appendChild(articleContent);
            headDiv.appendChild(moreContentButton);

            accordionDiv.appendChild(headDiv);
            accordionDiv.appendChild(showExtraContent());

            moreContentButton.addEventListener('click', moreContentClick);

            mainSection.appendChild(accordionDiv);
        });
    }

    function moreContentClick(e) {
        const extraContentUrl = 'http://localhost:3030/jsonstore/advanced/articles/details';
        const buttonElement = e.currentTarget;
        const accordionElement = e.target.parentNode.parentNode;
        const extraElement = accordionElement.querySelector('div:nth-of-type(2)');
        const paragraph = extraElement.querySelector('p');

        if (buttonElement.textContent === 'More') {
            fetch(`${extraContentUrl}/${buttonElement.id}`)
                .then(response => response.json())
                .then(data => {
                    paragraph.textContent = data.content;
                    extraElement.style.display = 'block';
                    buttonElement.textContent = 'Less';
                })
                .catch(error => {
                    alert("Couldn't fetch article details", error);
                });
        } else {
            extraElement.style.display = 'none';
            buttonElement.textContent = 'More';
        }
    }

    function showExtraContent() {
        const extraContentDiv = document.createElement('div');
        extraContentDiv.classList.add('extra');

        const contentParagraph = document.createElement('p');

        extraContentDiv.appendChild(contentParagraph);

        return extraContentDiv;
    }
}
solution();