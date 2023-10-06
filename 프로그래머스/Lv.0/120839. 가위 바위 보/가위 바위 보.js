function solution(rsp) {
    let result = [];
    const game = {'0': '5', '2': '0', '5': '2'}
    for(let i of rsp){
        result.push(game[i]);
    }
    return result.join('')
}