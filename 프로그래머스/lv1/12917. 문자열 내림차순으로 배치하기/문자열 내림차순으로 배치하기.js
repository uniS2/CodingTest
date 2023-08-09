function solution(s) {
    // (a,b) => (a-b) : 숫자만 가능
    return s.split("").sort().reverse().join('');
}