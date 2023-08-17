function solution(arr, n) {
    return (arr.length % 2) ? arr.map((i, v) => (v % 2) ? i : i + n) : arr.map((i, v) => !(v % 2) ? i : i + n);
}