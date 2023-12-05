let fs = require("fs");
let text = fs.readFileSync("../Input/Day4/input.txt").toString();
let lines = text.split("\n");

let cards = [];
lines.forEach(function (element, index) {
    let stringParts = element.split(":");
    let numbers = stringParts[1].split("|");
    cards[index] = [];
    numbers.forEach(function (cardElement, cardIndex) {
        cards[index].push(cardElement.split(" "));
        cards[index][cardIndex] = cards[index][cardIndex].filter(item => item !== '');
        cards[index]['amount'] = 1;
    });
});

let totalCards = 0;
cards.forEach(function (card, index) {
    let points = 0;
    for (let amountOfCards = 0; amountOfCards < cards[index]['amount']; amountOfCards++) {
        let matches = 0;
        cards[index][1].forEach(function (cardElement, cardIndex) {
            if (cards[index][0].includes(cardElement)) {
                matches++;
                if (points === 0) {
                    points = 1;
                } else {
                    points *= 2;
                }
            }
        });
        for (let i = 1; i <= matches; i++) {
            cards[index + i]['amount']++;
        }
        totalCards += matches;
    }
});

console.log(totalCards + cards.length);