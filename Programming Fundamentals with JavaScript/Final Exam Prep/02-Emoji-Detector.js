function emojiDetector (arr){
    let valid = [];
    let text = arr.shift();
    let pattern = /([\:\*]{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let digitPattern = /\d/g;
    let digitResult = 1;
    let digitMatches = text.match(digitPattern);
    for (match of digitMatches){
        digitResult *= Number(match)
    }
    console.log(`Cool threshold: ${digitResult}`);
    let emojiResult = text.matchAll(pattern);
    for (let match of emojiResult){
        let coolness = 0;
        let word = match.groups.emoji;
        for (let ch of word){
            let code = ch.charCodeAt();
            coolness += code
        }
        if (coolness > digitResult){
            valid.push(word)
        }
    }
    console.log(valid);
}
emojiDetector (["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
// emojiDetector (["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
// emojiDetector (["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]) 