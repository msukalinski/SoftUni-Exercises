function printDeckOfCards(cards) {

    function createCard(card) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuit = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        };
        let cardFace = card.length > 2 ? card.substring(0, 2) : card[0];
        let cardSuit = card[card.length - 1];

        if (!validFaces.includes(cardFace) || !validSuit.hasOwnProperty(cardSuit)) {
            throw new Error(`Invalid card: ${card}`);
        }
        return `${cardFace}${validSuit[cardSuit]}`;
    }
    try {
        let cardDeck = cards.map(createCard);
        console.log(cardDeck.join(' '));
    }
    catch(error) {
        console.log(error.message);
    }
}
printDeckOfCards(['5S', '3D', 'QD', '1C']);