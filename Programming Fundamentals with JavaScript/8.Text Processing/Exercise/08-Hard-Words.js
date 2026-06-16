function demo(arr) {
    let text = arr.shift();
    let missingWords = arr.shift();

    missingWords.sort((a, b) => a.length - b.length);

    let match = text.match(/_+/g);

    if (match) {
        match.forEach(blank => {
            let word = missingWords.find(w => w.length === blank.length);
            if (word){
                text = text.replace(blank, word);
                missingWords.splice(missingWords.indexOf(word),1);
            }
        });
    }
    console.log(text);

}

demo(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);
// demo()