const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function data(arr) {
  return arr.split(' ').map(Number);
}

function count(input) {
  let [numA, numB] = data(input.shift());
  const A = new Set(data(input.shift()));
  const B = new Set(data(input.shift()));

  let intersection = 0;

  for (let a of A) {
    if (B.has(a)) intersection++;
  }
  return numA + numB - intersection * 2;
}

console.log(count(input));