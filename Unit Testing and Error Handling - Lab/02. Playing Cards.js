function playingCards(face, suit) {
    const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validCardSuits = ['S', 'H', 'D', 'C'];

    if(!validCardFaces.includes(face)) {
        throw new Error
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
            return card.face + suitSymbols[card.suit];
        }
    }

    return card;
}

playingCards('2', 'S');