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

// Complete the plusMinus function below.
function plusMinus(arr) {

  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let index = 0; index < arr.length; index++) {

    if (arr[index] > 0) {
      positive++;
    } else if (arr[index] < 0) {
      negative++;
    } else if (arr[index] === 0) {
      zero++;
    };
  }

  let one = (positive / arr.length).toFixed(6);
  let two = (negative / arr.length).toFixed(6);
  let three = (zero / arr.length).toFixed(6);

  console.log(one);
  console.log(two);
  console.log(three);

  // return one, two, three;
}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}
