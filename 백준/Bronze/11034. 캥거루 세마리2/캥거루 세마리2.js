const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let result = [];

for (let i = 0; i < input.length; i++) {
  let [A, B, C] = input[i].split(' ');
  if (B - A >= C - B) {
    result.push(B - A - 1);
  } else {
    result.push(C - B - 1);
  }
}

console.log(result.join('\n'));