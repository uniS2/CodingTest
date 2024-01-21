const word = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

let min = 0;
for (let w of word) {
  let cur = w.charCodeAt();
  if (cur >= 80 && cur <= 83) min += 8;
  else if (cur >= 84 && cur <= 86) min += 9;
  else if (cur >= 87) min += 10;
  else min += Math.ceil((w.charCodeAt() - 64) / 3) + 2;
}
return console.log(min);