const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function enter(data) {
  const n = input.shift();
  data = data.map(d => d.trim().split(' '));
  let enter_list = new Set();

  for (let i = 0; i < n; i++) {
    if (data[i][1] === 'enter') {
      enter_list.add(data[i][0])
    } else {
      enter_list.delete(data[i][0])
    }
  }
  return [...enter_list].sort().reverse().join('\n');
}

console.log(enter(input));