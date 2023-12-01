let fs = require("fs");
let text = fs.readFileSync("../Input/Day1/input.txt").toString();
let lines = text.split("\n");

let intLines = [];
let spelledNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let numberEnum = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
};
lines.forEach(function (element, index) {
    let chars = "";
    intLines[index] = "";
    let processedPositions = [];

    for (let i = 0; i < element.length; i++) {
        chars += element[i];

        spelledNumbers.forEach(substring => {
            if (chars.endsWith(substring) && !processedPositions.includes(i - substring.length + 1)) {
                intLines[index] += numberEnum[substring].toString();
                processedPositions.push(i - substring.length + 1);
            }
        });

        if (!isNaN(element[i]) && !processedPositions.includes(i)) {
            intLines[index] += parseInt(element[i]).toString();
            processedPositions.push(i);
        }
    }
});

console.log(intLines);

let calibrationSum = 0;
intLines.forEach(function (element) {
    let calibrationValue = element.at(0) + element.at(-1);
    calibrationSum += parseInt(calibrationValue);
});

console.log(calibrationSum)