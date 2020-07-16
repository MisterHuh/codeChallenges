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

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let array = [];
    let o_array = oranges.map(n => n + b);
    let a_array = apples.map(n => n + a);

    let i = 0;
    let appleCounter = 0;
    while (i < a_array.length) {
        if (a_array[i] >= s && a_array[i] <= t) {
            appleCounter++;
        }
        i++;
    }

    let x = 0;
    let orangeCounter = 0;
    while (x < o_array.length) {
        if (o_array[x] >= s && o_array[x] <= t) {
            orangeCounter++;
        }
        x++;
    }

    console.log(appleCounter);
    console.log(orangeCounter);
}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
