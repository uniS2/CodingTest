const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n').map(i => i.trim());

function solution(input) {
  const n = input.shift();
  let set = new Set();
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (input[i] === 'ENTER') {
      set.clear();
    } else if (!set.has(input[i])) {
      count++;
      set.add(input[i]);
    }
  }
  return count;
}

console.log(solution(input));