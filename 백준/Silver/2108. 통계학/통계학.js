const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

function solution(input) {
  const n = input.shift();
  let obj = {};
  input.sort((a, b) => a - b);

  const average = Math.round(input.reduce((a, b) => a + b, 0) / n);
  const median = input[Math.trunc(input.length / 2)];
  const range = input[input.length - 1] - input[0];
  let mode = 0;

  for (let i = 0; i < n; i++) {
    obj[input[i]] = obj[input[i]] + 1 || 1;
  }

  const map = Object.entries(obj).sort((a, b) => b[1] - a[1] || a[0] - b[0]);

  if (map.length > 1 && map[0][1] === map[1][1]) {
    mode = map[1][0];
  } else {
    mode = map[0][0];
  }

  return `${average}\n${median}\n${mode}\n${range}`;
}

console.log(solution(input));