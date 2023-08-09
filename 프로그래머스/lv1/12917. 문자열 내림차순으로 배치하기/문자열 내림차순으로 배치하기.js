function solution(s) {
    // (a,b) => (a-b) : 숫자만 가능
    return [...s].sort().reverse().join('');
}