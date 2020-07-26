'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the birthday function below.
function birthday(s, d, m) {

  // s is:  [ 1, 2, 1, 3, 2 ]
  // d is: 3
  // m is: 2

  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.slice(i, i + m).reduce((x, y) => x + y) == d) {
        counter++;
    }
  }

  // same thing as:

  for (let i = 0; i < s.length; i++) {
    let slice_result = s.slice(i, i + m);
    // console.log("slice_result is:", slice_result);
    // slice_result is: [ 1, 2 ]
    // slice_result is: [ 2, 1 ]
    // slice_result is: [ 1, 3 ]
    // slice_result is: [ 3, 2 ]

    // grabs from starting s[i] up untill s[i + m]
    // instead of looping through the # of m

    let sum = slice_result.reduce((x, y) => x + y);

    // x is the accumulator
    // y is the currentValue // during the first loop, there is no currentValue
    // sum is: 3
    // sum is: 3
    // sum is: 4
    // sum is: 5
    // sum is: 2
    // console.log("sum is:", sum);

    (sum == d) ? counter++ : null;


  }

  return counter;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

  const dm = readLine().replace(/\s+$/g, '').split(' ');

  const d = parseInt(dm[0], 10);

  const m = parseInt(dm[1], 10);

  const result = birthday(s, d, m);

  ws.write(result + '\n');

  ws.end();
}
