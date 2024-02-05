function solution(my_string) {
  let result = Array(52).fill(0);

  [...my_string].forEach(m => {
    if (m.toUpperCase() == m) result[m.charCodeAt() - 'A'.charCodeAt()]++;
    else result[m.charCodeAt() - 'A'.charCodeAt() - 6]++;
  })

  return result;
}