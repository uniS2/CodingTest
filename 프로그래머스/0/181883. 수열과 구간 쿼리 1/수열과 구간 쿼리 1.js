function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    arr = arr.map((v, i) => {
      if (i >= s && i <= e) return v + 1;
      else return v;
    })
  })
  return arr;
}