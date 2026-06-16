function modernTimes (str){
    let text = str.split(' ');
    let hashtags = text.filter(word => word.startsWith('#') && word.length > 1);
    for (const hashtag of hashtags){
        let specialWord = hashtag.slice(1);
        let pattern = /^[A-Za-z]+$/;
        if (pattern.test(specialWord)){
            console.log(specialWord);
        }
    }
}
modernTimes ('Nowadays everyone uses # to tag a #special123 word in #socialMedia')