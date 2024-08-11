const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function solution(input) {
  const n = input.shift();
  let pattern = [...input[0].trim()];

  for (let i = 1; i < n; i++) {
    pattern = pattern.map((c, index) => {
      if (c != input[i][index]) {
        return '?'
      } else return c;
    });
  }

  return pattern.join('');
}

console.log(solution(input));