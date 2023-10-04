function solution(arr) {
    return arr.map(i => Array(i).fill(i)).flat();
}