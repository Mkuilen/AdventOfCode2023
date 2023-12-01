let fs = require("fs");
let text = fs.readFileSync("../Input/Day1/input.txt").toString();

let lines = text.split("\n");
let intLines = [];
lines.forEach(function(element, index) {
    for (let i = 0; i < element.length; i++) {
        if(isNaN(element[i])) {
            continue;
        }
        if(intLines[index]) {
            intLines[index] += parseInt(element[i]).toString();
        } else {
            intLines[index] = parseInt(element[i]).toString();
        }
    }
});

let calibrationSum = 0;
intLines.forEach(function(element, index) {
    let calibrationValue = "";
    if(element.length < 2) {
        calibrationValue = element[0].toString() + element[0].toString();
    } else {
        calibrationValue = element[0].toString() + element[element.length - 1].toString();
    }
    calibrationSum += parseInt(calibrationValue);
});

console.log(calibrationSum)