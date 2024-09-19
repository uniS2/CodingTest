let [str, word] = require('fs').readFileSync('/dev/stdin', 'utf8').toString().split('\n');

function solution(str, word) {
  let count = 0;

  while (str.includes(word)) {
    str = str.replace(word, '_');
    count++;
  }

  return count;
}

console.log(solution(str, word));