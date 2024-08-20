const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

function fibonacci(n) {
  if (n <= 1) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}

function solution(input) {
  return fibonacci(Number(input));
}

console.log(solution(input));