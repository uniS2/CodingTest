let [N, ...input] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

input = input.map(i => i.trim());

const a = input.map(v => {
  let word = '';
  for (let i = 0; i < v.length; i++) {
    if (!word.includes(v[i])) {
      word += v[i];
    } else if (word.includes(v[i]) && v[i] != v[i - 1]) {
      return false;
    }
  }
})

console.log(a.filter(a => a == undefined).length)