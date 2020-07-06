'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {

    let length = parseInt(n);
    let sym = "#";
    let space = " ";

    for (let index = 1; index <= length; index++) {
        let nextRow = '';

        if (index === 1) {
            let position = length - index;
            for (let i = 0; i < position; i++) {
                nextRow += space;
            }
            nextRow += sym;
            console.log(nextRow);
        } else {
            let position = length - index;
            for (let i = 0; i < position; i++) {
                nextRow += space;
            };
            for (let i2 = 0; i2 < index; i2++) {
                nextRow += sym;
            }
            console.log(nextRow);
        }
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
