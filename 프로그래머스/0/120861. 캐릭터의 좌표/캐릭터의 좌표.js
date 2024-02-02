function solution(keyinput, board) {
    const direction = {
        "up": [0, 1],
        "down": [0, -1],
        "left": [-1, 0],
        "right": [1, 0],
    }
    let result = [0, 0];
    board = board.map(b => Math.trunc(b / 2));
    keyinput.forEach(dir => {
        result[0] += direction[dir][0];
        result[1] += direction[dir][1];
        if(Math.abs(result[0]) > board[0]){
            result[0] = result[0] > 0 ? board[0] : - board[0];
        }
        if(Math.abs(result[1]) > board[1]){
            result[1] = result[1] > 0 ? board[1] : - board[1];
        }
    })
    return result;
}