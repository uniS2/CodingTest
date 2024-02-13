function solution(arr) {
    const log = Math.log2(arr.length);
    if(log == Math.trunc(log)) return arr;
    else return [...arr, ...Array(2 ** (Math.trunc(log) + 1) - arr.length).fill(0)];
}