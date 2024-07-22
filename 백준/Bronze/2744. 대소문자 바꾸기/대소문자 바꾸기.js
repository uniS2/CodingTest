const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim();

function convert(str) {
  let answer = '';

  [...str].forEach((s) => {
    if (s.toUpperCase() === s) {
      answer += s.toLowerCase();
    } else {
      answer += s.toUpperCase();
    }
  });
  return answer;
}

console.log(convert(input));