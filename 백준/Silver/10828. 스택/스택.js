const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n').map(i => i.trim());

function solution(input) {
  const n = input.shift();
  const command = ['push', 'pop', 'size', 'empty', 'top'];
  let output = [];
  let stack = [];

  for (let i = 0; i < n; i++) {
    if (input[i].includes(command[0])) {
      const temp = input[i].split(' ')[1];
      stack.push(temp);
      continue;
    }

    if (input[i] === command[1]) {
      output.push(stack.pop() || -1);
    } else if (input[i] === command[2]) {
      output.push(stack.length);
    } else if (input[i] === command[3]) {
      output.push(stack.length > 0 ? 0 : 1);
    } else {
      output.push(stack[stack.length - 1] || -1);
    }
  }

  return output.join('\n');
}

console.log(solution(input));