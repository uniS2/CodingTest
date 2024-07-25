const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function sort(input) {
  input.shift();
  const list = input.map(i => i.split(' '));
  list.sort((a, b) => +a[0] - +b[0]);
  return list.map(i => i.join(' ')).join('\n');
}

console.log(sort(input));