function solution(board) {
    let danger = [];
    let answer = [...board];
    
    board.forEach((b, index) => {
        b.forEach((v, i) => {
            if(v === 1) danger.push([index, i]);
        })
    })
    
    const length = board.length;
    danger.forEach(n => {
        if (n[0] > 0) {
            (n[1] > 0) && answer[n[0] - 1][n[1] - 1]++;
            answer[n[0] - 1][n[1]]++;
            (n[1] < length - 1) && answer[n[0] - 1][n[1] + 1]++;
        }
        if (n[1] > 0) answer[n[0]][n[1] - 1]++;
        if (n[1] < length - 1) answer[n[0]][n[1] + 1]++;
        if (n[0] < length - 1) {
            (n[1] > 0) && answer[n[0] + 1][n[1] - 1]++;
            answer[n[0] + 1][n[1]]++;
            (n[1] < length - 1) && answer[n[0] + 1][n[1] + 1]++;
        }
    });
    console.log(answer);
    return answer.flat().filter(n => n === 0).length;
}