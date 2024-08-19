const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(h, w, n, m) {
  return Math.floor(--h / (n + 1) + 1) * Math.floor(--w / (m + 1) + 1);
}

console.log(solution(...input));