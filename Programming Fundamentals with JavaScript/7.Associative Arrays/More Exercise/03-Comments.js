function demo(input) {
    const users = new Set();
    const articles = new Set();
    const comments = {};

    for (let line of input) {

        // Add user
        if (line.startsWith("user ")) {
            const username = line.split("user ")[1];
            users.add(username);

        // Add article
        } else if (line.startsWith("article ")) {
            const articleName = line.split("article ")[1];
            articles.add(articleName);
            comments[articleName] = [];

        // Add comment
        } else if (line.includes(" posts on ")) {
            const [userPart, rest] = line.split(" posts on ");
            const [articlePart, commentPart] = rest.split(": ");
            const [title, content] = commentPart.split(", ");

            if (users.has(userPart) && articles.has(articlePart)) {
                comments[articlePart].push({
                    user: userPart,
                    title,
                    content
                });
            }
        }
    }

    // Sort articles by number of comments (descending)
    Object.entries(comments)
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(([article, articleComments]) => {
            console.log(`Comments on ${article}`);

            // Sort comments by username (ascending)
            articleComments
                .sort((a, b) => a.user.localeCompare(b.user))
                .forEach(c => {
                    console.log(`--- From user ${c.user}: ${c.title} - ${c.content}`);
                });
        });
}

demo(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);