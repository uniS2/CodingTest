let word = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

const alphabet = {
  'č': "c=",
  'ć': "c-",
  "dž": "dz=",
  "đ": "d-",
  "lj": "lj",
  "nj": "nj",
  "š": "s=",
  "ž": "z=",
}

for (let [_, value] of Object.entries(alphabet)) {
  if (word.includes(value)) {
    word = word.replaceAll(value, ' ');
  }
}

console.log(word.length);