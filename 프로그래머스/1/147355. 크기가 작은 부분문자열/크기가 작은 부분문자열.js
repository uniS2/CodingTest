function solution(t, p) {
    let result = 0;
    for(let i = 0; i <= t.length - p.length; i++){
        if(+t.slice(i, i + p.length) <= p) result++;
    }
    return result;
}