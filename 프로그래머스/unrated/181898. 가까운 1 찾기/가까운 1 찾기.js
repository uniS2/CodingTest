function solution(arr, idx) {
    return arr.findIndex((i, v) => v >= idx && i === 1);
}