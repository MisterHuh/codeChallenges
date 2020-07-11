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
  let hour = s.substring(0, 2);
  let ans = s.substr(2, 6);

  console.log('x is:', x);
  console.log('s is:', s);
  console.log('hour is: ', hour);
  console.log('ans is: ', ans);

  if (x === "PM") {
    let test = parseInt(hour);
    console.log('test is: ', test);

    let newHour = test + 12;
    console.log('newHour is: ', newHour);

    const answer = newHour + ans;
    // console.log("reached");
    console.log(answer);
    return answer;
    // return answer;
  };

  // return s;
  const answer = s.substr(8)
  console.log(answer);
  return;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
