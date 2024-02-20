const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let result = input[0];
input[1].split(' ').forEach(v => {
  if (v == 1) result--;
  for (let i = 2; i < v; i++) {
    if (v % i == 0) {
      result--;
      break;
    }
  }
})
console.log(result);