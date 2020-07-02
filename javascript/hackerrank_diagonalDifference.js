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

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here

  let first_diag = arr[0][0] + arr[1][1] + arr[2][2];
  let second_diag = arr[0][2] + arr[1][1] + arr[2][0];

  let answer = first_diag - second_diag;

  return Math.abs(answer);

    // 1   2   3
    // 4   5   6
    // 9   8   9

    // 0[0] + 1[1] + 2[2]
    // 0[2] + 1[1] + 2[0]

  // for (let outerIndex = 0; outerIndex < arr.length; outerIndex++) {
  //   for (let innerIndex = 0; innerIndex < arr[outerIndex].length; innerIndex++) {
  //     first_diag +=
  //       };
  // }

}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
  }

  const result = diagonalDifference(arr);

  ws.write(result + '\n');

  ws.end();
}
