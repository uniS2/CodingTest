const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim();

function math(num) {
  const major = [1, 2, 3, 4, 5, 6, 7, 8];

  if (num === major.join(' ')) {
    return 'ascending';
  } else if (num === major.reverse().join(' ')) {
    return 'descending';
  } else {
    return 'mixed';
  }
}
console.log(math(input));