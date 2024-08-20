const s = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

function solution(s) {
  let max = 1;
  let sum = 0;

  do {
    sum += ++max;
  } while (s > sum)

  return --max;
}

console.log(solution(Number(s)));