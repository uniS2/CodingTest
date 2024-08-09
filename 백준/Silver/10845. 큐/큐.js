const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function solution(input) {
  let queue = [];
  let output = [];

  for (let i = 1; i <= input[0]; i++) {
    let temp = input[i].trim().split(' ');

    if (temp[0] === 'push') {
      queue.push(+temp[1])
    } else if (temp[0] === 'pop') {
      output.push(queue.shift() || - 1)
    } else if (temp[0] === 'size') {
      output.push(queue.length)
    } else if (temp[0] === 'empty') {
      output.push(queue.length === 0 ? 1 : 0)
    } else if (temp[0] === 'front') {
      output.push(queue[0] || -1)
    } else {
      output.push(queue[queue.length - 1] || -1)
    }
  }

  return output.join('\n');
}

console.log(solution(input));