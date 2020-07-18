'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {

  let max = 0;
  let min = 0;

  let maxC = 0;
  let minC = 0;

  for (let i = 0; i < scores.length; i++) {
    if (!i) {
      max = scores[i];
      min = scores[i];
    } else if (scores[i] < min) {
      minC++;
      min = scores[i];
    } else if (scores[i] > max) {
      maxC++;
      max = scores[i];
    }
  }

  let array = [maxC, minC];
  return array;

  // Preparing Variables
  // much more efficient this way;
  // let [ hi, lo ] = [ scores[0], scores[0] ];
  // let [ max, min ] = [ 0, 0 ];

  // // Calculating
  // for (let i = 1; i < scores.length; i++) {
  //     if (scores[i] > hi) { hi = scores[i]; max++; }
  //     if (scores[i] < lo) { lo = scores[i]; min++; }
  // }

  // //Returning
  // return [ max, min ];


}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

  const result = breakingRecords(scores);

  ws.write(result.join(' ') + '\n');

  ws.end();
}
