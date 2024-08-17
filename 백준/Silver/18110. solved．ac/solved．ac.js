const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

function solution(input) {
  const n = input.shift();
  if (n === 0) return 0;

  const count = Math.round(input.length * 15 / 100);
  input.sort((a, b) => a - b);
  input = input.slice(count);
  input = input.slice(0, input.length - count)

  return Math.round(input.reduce((a, b) => a + b, 0) / input.length);
}

console.log(solution(input));