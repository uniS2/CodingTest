const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin', 'utf8').trim();

function square_length(side) {
  return side * 4;
}

console.log(square_length(input));