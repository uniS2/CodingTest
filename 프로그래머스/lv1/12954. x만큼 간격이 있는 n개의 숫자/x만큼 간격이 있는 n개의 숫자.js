function solution(x, n) {
    let answer = [];
    for(let i = 1; i <= n; i++){
        let current = x * i;
        answer.push(current);
    }
    return answer;
}