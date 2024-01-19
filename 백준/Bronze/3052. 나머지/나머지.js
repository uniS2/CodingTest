let input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

let result = {};
input.map(n => n % 42).forEach(i => {
  result[i] = 1;
})
return console.log(Object.entries(result).length);