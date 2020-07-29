'use strict';

const fs = require('fs');

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

// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
  // console.log(n);
  // console.log(k);
  // console.log(ar);

  let counter = 0;

  for (let i = 0; i < ar.length; i++) {
    for (let x = 0; x < ar.length; x++) {
      if ((ar[i] < ar[x]) && !((ar[i] + ar[x]) % k)) {
        //   console.log("ar[i] is: ",ar[i]);
        //   console.log("ar[x] is: ",ar[x]);

        // if (ar[i] == 19) {
        // console.log("i is: ", i);
        // console.log("x is: ", x);
        // console.log("[" + ar[i] + " , " + ar[x] + "]");
        // };

        // console.log("[" + ar[i] + " , " + ar[x] + "]");
        counter++;
      }
      //   console.log("counter is: ", counter);
    }
    // return counter;
  }

  console.log("counter is: ", counter);
  return counter;

}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nk = readLine().split(' ');

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

  let result = divisibleSumPairs(n, k, ar);

  ws.write(result + "\n");

  ws.end();
}
