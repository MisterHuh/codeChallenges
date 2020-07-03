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
  ;

  let length = parseInt(n);
  let sym = "#";

  for (let index = 0; index < length; index++) {

    if (index === 0) {
      console.log("     " + sym);
    } else {
      let nextRow = "1";
      for (let inner = 1; inner <= index; inner++) {
        nextRow = nextRow.concat(inner);
        // console.log(nextRow);
      };
      // nextRow = nextRow.concat(sym);
      console.log(nextRow);
    }

  }


}

function main() {
  const n = parseInt(readLine(), 10);

  staircase(n);
}
