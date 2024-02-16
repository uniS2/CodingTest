function solution(x, n) {
    let answer = [];
    for(let i = 1; i <= n; i++){
        answer.push(x * i);
    }
    return answer;
    
    // 다른 풀이
    // Array.prototype.fill(): value[, start[, end]]
    // return Array(n).fill(x).map((x, i) => x*(i + 1))
}