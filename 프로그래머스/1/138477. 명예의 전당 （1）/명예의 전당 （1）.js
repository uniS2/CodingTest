function solution(k, score) {
    let result = [];
    let top = [];
    score.forEach((score, index) => {
        top.push(score);
        top.sort((a, b) => b - a);
        if (top.length < k) result.push(top[top.length - 1]);
        else result.push(top[k - 1]);
    })
    return result;
}