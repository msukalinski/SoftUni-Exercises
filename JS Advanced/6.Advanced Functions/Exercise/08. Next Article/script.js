function getArticleGenerator(articles) {
    const contentElement = document.getElementById('content');

    return function(){
        const articleElement = document.createElement('article');

        if (articles.length > 0){
            articleElement.textContent = articles.shift();
        }else{
            return;
        }
        contentElement.appendChild(articleElement);
    }
}