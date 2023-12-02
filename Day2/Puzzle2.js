let fs = require("fs");
let text = fs.readFileSync("../Input/Day2/input.txt").toString();
let lines = text.split("\n");

let games = [];
lines.forEach(function (element, index) {
    let parts = element.split(":");
    let sets = parts[1].split(";");
    let blocks = [];
    sets.forEach(function (setElement, setIndex) {
        blocks.push(setElement.split(","));
    });
    games[parts[0]] = blocks;
});

let minAmountOfBlocks = 0;

for (let key in games) {
    let minBlocks = 0;
    let red = [];
    let green = [];
    let blue = [];
    for (let setKey in games[key]) {
        for (let gameKey in games[key][setKey]) {
            let color = games[key][setKey][gameKey].replace(/\d+/g, '').trim();
            let amount = games[key][setKey][gameKey].replace(/[a-zA-Z]/g, '').trim();
            switch (color) {
                case "red":
                    red.push(parseInt(amount));
                    break;
                case "green":
                    green.push(parseInt(amount));
                    break;
                case "blue":
                    blue.push(parseInt(amount));
                    break;
                default:
                    console.log("unknown");
                    break;
            }
        }
    }

    let minRed = red.length > 0 ? Math.max(...red) : 1;
    let minGreen = green.length > 0 ? Math.max(...green) : 1;
    let minBlue = blue.length > 0 ? Math.max(...blue) : 1;

    minAmountOfBlocks += minRed * minGreen * minBlue;
}

console.log(minAmountOfBlocks);
