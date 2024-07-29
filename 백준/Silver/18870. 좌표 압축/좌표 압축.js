const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function solution(input) {
  let positions = input[1].split(' ').map(Number);
  const unique = [...new Set(positions)].sort((a, b) => a - b);
  const uniqueMap = new Map(unique.map((p, i) => [p, i]));

  const result = positions.map(p => uniqueMap.get(p));
  return result.join(' ');
}

console.log(solution(input));