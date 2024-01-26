const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const eval = {
  'A+': 4.5,
  'A0': 4.0,
  "B+": 3.5,
  "B0": 3.0,
  "C+": 2.5,
  "C0": 2.0,
  "D+": 1.5,
  "D0": 1.0,
  "F": 0.0,
}

let sum = 0;
let scoreSum = 0;

for (let s of input) {
  let [_, score, grade] = s.split(' ');
  if (grade != 'P') {
    sum += +score * eval[grade.trim()];
    scoreSum += +score;
  }
}

console.log(sum / scoreSum);