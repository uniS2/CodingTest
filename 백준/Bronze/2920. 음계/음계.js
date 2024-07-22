const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim();

function note(list) {
  const major = [1, 2, 3, 4, 5, 6, 7, 8];

  if (list === major.join(' ')) {
    return 'ascending';
  } else if (list === major.reverse().join(' ')) {
    return 'descending';
  } else {
    return 'mixed';
  }
}
console.log(note(input));