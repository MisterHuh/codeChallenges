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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {

    let removeSmall = Math.min.apply(Math, arr);
    let removeBig = Math.max.apply(Math, arr);

    let small = 0;
    let big = 0;

    let smallTest = arr.indexOf(removeSmall);
    let bigTest = arr.indexOf(removeBig);

    for (let i = 0; i < arr.length; i++) {
        if ( !(i === smallTest) && !(i === bigTest) ) {
            big += arr[i];
            small += arr[i]
        } else if (i === smallTest) {
            small += arr[i];
        } else if (i === bigTest) {
            big += arr[i];
        }
    };
    console.log(small + " " + big);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
