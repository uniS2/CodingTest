function solution(arr, query) {
    query.forEach((v, i) => {
        arr = (i % 2)
            ? arr.slice(v, arr.length + 1)
            : arr.slice(0, v + 1);
    })
    return arr;
}