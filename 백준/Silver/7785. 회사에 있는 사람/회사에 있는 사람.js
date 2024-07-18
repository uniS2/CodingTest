const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function enter(data) {
  const n = data.shift();
  let enter_list = new Set();

  for (let i = 0; i < n; i++) {
    const [name, status] = data[i].trim().split(' ');
    if (status === 'enter') {
      enter_list.add(name)
    } else {
      enter_list.delete(name)
    }
  }
  return [...enter_list].sort().reverse().join('\n');
}

console.log(enter(input));