function printDeckOfCards(cards) {
    let result = [];

    function createCard() {

        const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validCardSuits = ['S', 'H', 'D', 'C'];
        let face = '';
        let suit = '';
        for (let currentCard of cards) {
            if (currentCard.length > 2) {
                face = currentCard.slice(0, 2);
                suit = currentCard.slice(2);
            } else {
                [face, suit] = currentCard.split('');
            }

            if (!validCardFaces.includes(face) || !validCardSuits.includes(suit)) {
                console.log(`Invalid card: ${currentCard}`);
                break
            }

            let card = {
                face: face.toUpperCase(),
                suit: suit.toUpperCase(),
                toString: () => {
                    let suitSymbols = {
                        'S': '\u2660',
                        'H': '\u2665',
                        'D': '\u2666',
                        'C': '\u2663'
                    };
                    result.push(card.face + suitSymbols[card.suit]);
                }
            }

            card.toString();
        }

        return result;
    }

    console.log(createCard(cards).join(" "));
}

printDeckOfCards(['1S', '10D', 'KH', '2C']);