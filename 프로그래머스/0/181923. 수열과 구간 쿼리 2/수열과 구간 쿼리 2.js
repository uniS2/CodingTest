function solution(arr, queries) {
    let answer = [];
    for(let i = 0; i < queries.length; i++){
        let [s, e, k] = queries[i];
        answer.push(arr.slice(s, e + 1).sort((a, b) => +a - +b).filter(i => i > k)[0] || -1);
    }
    return answer;
}