const [m, n] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(m, n) {
  let result = [];
  let isDecimal = true;

  for (let i = m === 1 ? 2 : m; i <= n; i++) {
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isDecimal = false;
        break;
      }
    }
    if (isDecimal) {
      result.push(i);
    }
    isDecimal = true;
  }

  return result.join('\n');
}

console.log(solution(m, n));