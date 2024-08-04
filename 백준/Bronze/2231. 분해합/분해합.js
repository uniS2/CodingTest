const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

function solution(n) {
  for (let i = 1; i < n; i++) {
    const arr = [...String(i)].map(Number);
    if (Number(n) === i + arr.reduce((a, b) => a + b, 0)) {
      return i;
    }
  }
  return 0;
}

console.log(solution(input));