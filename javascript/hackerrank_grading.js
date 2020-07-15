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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // Write your code here

  let array = [];
  let i = 0;
  while (i < grades.length) {

    let modulus = grades[i] % 5;
    let ans = grades[i];

    if (grades[i] <= 37) {
      grades[i] = ans;
    } else if (grades[i] <= 39) {
      grades[i] = 40;
    } else if (modulus == 3 || modulus == 8) {
      grades[i] += 2;
    } else if (modulus == 4 || modulus == 9) {
      grades[i] += 1;
    }
    array.push(grades[i])
    i++;
  }

  return array;

  /* shorter solution */

  //  return grades.map((n) => {
  //     let diff = 5 - (n % 5);
  //     if(diff < 3 && n >= 38) {
  //         n += diff;
  //     }

  //     return n;
  // })


}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const gradesCount = parseInt(readLine().trim(), 10);

  let grades = [];

  for (let i = 0; i < gradesCount; i++) {
    const gradesItem = parseInt(readLine().trim(), 10);
    grades.push(gradesItem);
  }

  const result = gradingStudents(grades);

  ws.write(result.join('\n') + '\n');

  ws.end();
}
