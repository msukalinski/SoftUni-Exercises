function playingCards(cardFace, cardSuit) {
    let validCard = {
        validFaces: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
        validSuit: {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }
    };
    if (!validCard.validFaces.includes(cardFace.toUpperCase())) {
        throw 'Error';
    }
    let curCardFace = validCard.validFaces[validCard.validFaces.indexOf(cardFace)];

    return {
        face: curCardFace,
        suit: validCard.validSuit[cardSuit.toUpperCase()],

        toString: function () {
            return `${this.face}${this.suit}`;
        }
    }
}
console.log(playingCards('10', 'H'));
