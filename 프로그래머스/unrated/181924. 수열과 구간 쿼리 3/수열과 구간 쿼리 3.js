function solution(arr, queries) {
    queries.forEach(([i, j]) => {
        let cur = arr[i];
        arr[i] = arr[j];
        arr[j] = cur;
    })
    return arr;
}