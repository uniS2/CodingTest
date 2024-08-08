const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function solution(input) {
  const t = input.shift();
  let result = [];

  for (let i = 0; i < t; i++) {
    input.shift();
    const list = input.shift().split(' ').map(Number);
    result.push(`${Math.min(...list)} ${Math.max(...list)}`);
  }

  return result.join('\n');
}

console.log(solution(input));