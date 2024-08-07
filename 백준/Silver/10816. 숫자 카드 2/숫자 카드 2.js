const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function count(data) {
  const have_list = data[1].split(' ');
  const card_list = data[3].split(' ');
  let hash = new Map();
  let answer = [];

  for (let i = 0; i < data[0]; i++) {
    if (hash.has(have_list[i])) {
      hash.set(have_list[i], hash.get(have_list[i]) + 1);
    } else {
      hash.set(have_list[i], 1);
    }
  }

  for (let i = 0; i < data[2]; i++) {
    if (hash.has(card_list[i])) {
      answer.push(hash.get(card_list[i]));
    } else {
      answer.push(0);
    }
  }

  return answer.join(' ');
}

console.log(count(input));