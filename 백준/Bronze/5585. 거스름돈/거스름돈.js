const fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf8').trim();

const unit = [500, 100, 50, 10, 5, 1];
input = 1000 - input;
let count = 0;

for (let i = 0; i < unit.length; i++) {
  if (unit[i] === 1) {
    count += input;
  } else if (input >= unit[i]) {
    count += Math.floor(input / unit[i]);
    input = input % unit[i];
  }
}

console.log(count);
