let fs = require("fs");
let text = fs.readFileSync("../Input/Day2/input.txt").toString();
let lines = text.split("\n");

let red = 12;
let green = 13;
let blue = 14;

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

let sumOfGamesPossible = 0;

for (let key in games) {
    let skip = false;
    for (let setKey in games[key]) {
        for (let gameKey in games[key][setKey]) {
            let color = games[key][setKey][gameKey].replace(/\d+/g, '').trim();
            let amount = games[key][setKey][gameKey].replace(/[a-zA-Z]/g, '').trim();
            switch (color) {
                case "red":
                    if (amount > red) {
                        skip = true;
                        continue;
                    }
                    break;
                case "green":
                    if (amount > green) {
                        skip = true;
                        continue;
                    }
                    break;
                case "blue":
                    if (amount > blue) {
                        skip = true;
                        continue;
                    }
                    break;
                default:
                    console.log("unknown");
                    break;
            }
        }
        if (skip) {
            continue;
        }
    }
    if (skip) {
        continue;
    }
    sumOfGamesPossible += parseInt(key.replace(/[a-zA-Z]/g, '').trim());
}

console.log(sumOfGamesPossible);
