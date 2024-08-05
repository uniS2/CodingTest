const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function solution(input) {
  const aSet = new Set(input[1].split(' ').map(Number));
  const xList = input[3].split(' ').map(Number);

  return xList.map(x => aSet.has(x) ? 1 : 0).join('\n');
}

console.log(solution(input));