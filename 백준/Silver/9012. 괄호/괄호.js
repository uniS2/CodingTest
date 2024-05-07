const fs = require('fs');
let [T, ...input] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let result = '';

for (let i = 0; i < T; i++) {
  let left = 0;
  let right = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] == '(') {
      left++
    } else if (input[i][j] == ')') {
      right++;
    }
    if (right > left) {
      result += 'NO' + '\n';
      break;
    }
    if (j == input[i].length - 1) {
      result += (left == right ? 'YES' : 'NO') + '\n';
    }
  }
}

return console.log(result);