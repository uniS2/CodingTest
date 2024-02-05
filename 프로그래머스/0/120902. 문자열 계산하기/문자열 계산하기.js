function solution(my_string) {
  let result = 0;
  const input = my_string.split(' ');

  input.forEach((v, i) => {
    if (!(i % 2)) result += +v;
    else if (v == '-') result -= (+input[i + 1] * 2);
  })

  return result;
}