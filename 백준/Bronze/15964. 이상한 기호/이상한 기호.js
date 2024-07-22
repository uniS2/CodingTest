const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function math(num) {
  return (num[0] + num[1]) * (num[0] - num[1]);
}
console.log(math(input));