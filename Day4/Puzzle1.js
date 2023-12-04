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
    });
});

let totalPoints = 0;
cards.forEach(function (card, index) {
    let points = 0;
    cards[index][1].forEach(function (cardElement, cardIndex) {
        if(cards[index][0].includes(cardElement)) {
            if(points === 0){
                points = 1;
            } else {
                points *= 2;
            }
        }
    });
    totalPoints += points;
});

console.log(totalPoints);