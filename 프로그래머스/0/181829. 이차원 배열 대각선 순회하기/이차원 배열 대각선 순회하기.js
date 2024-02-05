function solution(board, k) {
    let result = [];
    board.forEach(b => {
        if (k >= 0) result.push(...b.slice(0, 1 + k--));
    })
    return result.reduce((a, b) => a + b, 0);
}