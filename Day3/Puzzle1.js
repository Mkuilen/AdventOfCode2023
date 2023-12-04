let fs = require("fs");
let text = fs.readFileSync("../Input/Day3/input.txt").toString();
let lines = text.split("\n");

let sumPartNumbers = 0;
for (let key in lines) {
    let parsedKey = parseInt(key);
    for (let charKey in lines[key]) {
        let parsedCharKey = parseInt(charKey);
        let numbers = '';
        if (isNaN(lines[key][charKey])) {
            continue;
        }
        let checkNumbers = true;
        let partNumbers = 0;
        while (checkNumbers === true) {
            if (parsedKey - 1 >= 0 && parsedCharKey >= 0 && isNaN(lines[parsedKey - 1][parsedCharKey]) && lines[parsedKey - 1][parsedCharKey] != '.') {
                numbers += lines[parsedKey][parsedCharKey];
                checkNumbers = false;
                continue;
            } else if (parsedKey + 1 < lines.length && parsedCharKey >= 0 && isNaN(lines[parsedKey + 1][parsedCharKey]) && lines[parsedKey + 1][parsedCharKey] != '.') {
                numbers += lines[parsedKey][parsedCharKey];
                continue;
            } else if (parsedKey >= 0 && parsedCharKey - 1 >= 0 && isNaN(lines[parsedKey][parsedCharKey - 1]) && lines[parsedKey][parsedCharKey - 1] != '.') {
                numbers += lines[parsedKey][parsedCharKey];
                continue;
            } else if (parsedKey >= 0 && parsedCharKey + 1 < lines[parsedKey].length && isNaN(lines[parsedKey][parsedCharKey + 1]) && lines[parsedKey][parsedCharKey + 1] != '.') {
                numbers += lines[parsedKey][parsedCharKey];
                continue;
            } else if (parsedKey - 1 >= 0 && parsedCharKey - 1 >= 0 && isNaN(lines[parsedKey - 1][parsedCharKey - 1]) && lines[parsedKey - 1][parsedCharKey - 1] != '.') {
                numbers += lines[parsedKey][parsedCharKey];
                continue;
            } else if (parsedKey - 1 >= 0 && parsedCharKey + 1 < lines[parsedKey].length && isNaN(lines[parsedKey - 1][parsedCharKey + 1]) && lines[parsedKey - 1][parsedCharKey + 1] != '.') {
                numbers += lines[parsedKey][parsedCharKey];
                continue;
            } else if (parsedKey + 1 < lines.length && parsedCharKey - 1 >= 0 && isNaN(lines[parsedKey + 1][parsedCharKey - 1]) && lines[parsedKey + 1][parsedCharKey - 1] != '.') {
                numbers += lines[parsedKey][parsedCharKey];
                continue;
            } else if (parsedKey + 1 < lines.length && parsedCharKey + 1 < lines[parsedKey].length && isNaN(lines[parsedKey + 1][parsedCharKey + 1]) && lines[parsedKey + 1][parsedCharKey + 1] != '.') {
                numbers += lines[parsedKey][parsedCharKey];
                continue;
            }
            console.log(numbers);
            partNumbers += parseInt(numbers);
            checkNumbers = false;
        }
    }
}

console.log(sumPartNumbers);