function solution(array, commands) {
    const result = [];
    
    for(let i in commands){
        let row = commands[i];
        result.push(array.slice(row[0] - 1, row[1]).sort((a, b) => a - b)[row[2] - 1]);
    }
    
    return result;
}