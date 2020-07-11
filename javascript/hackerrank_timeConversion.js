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
  inputString = inputString.trim().split('\n').map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {

  let x = s.slice(-2);
  let hour = parseInt(s.substring(0, 2));
  let ans = s.substr(2, 6);

  if (x == "AM") {
    if (!hour || hour === 12) {
      hour = "00";
    } else if (hour <= 9) {
      hour = "0" + hour;
    };
  } else if (x == "PM") {
    if (!(hour === 12)) {
      hour = hour + 12;
    }
  }
  const answer = hour + ans;
  return answer;

}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
