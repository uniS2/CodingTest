function solution(arr, k) {
    return (k % 2) ? arr.map(i => i * k) : arr.map(i => i + k)
}