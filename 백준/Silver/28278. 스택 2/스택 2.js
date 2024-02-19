let [N, ...input] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
input = input.map(i => i.trim());

let stack = [];
let result = [];
for (let i = 0; i < +N; i++) {
  if (input[i][0] == 1) {
    stack.push(input[i].slice(2));
  }
  else if (input[i] == 2) {
    result.push(stack.length ? stack.pop() : -1);
  }
  else if (input[i] == 3) {
    result.push(stack.length);
  }
  else if (input[i] == 4) {
    result.push(!stack.length ? 1 : 0);
  }
  else {
    result.push(stack.length ? stack.slice(-1) : -1);
  }
}

console.log(result.join('\n'));