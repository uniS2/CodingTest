function solution(numLog) {
    const calculator = {"1": "w", "-1": "s", "10": "d", "-10": "a"};
    let str = ''
    
    for(let i = 0; i < numLog.length - 1; i++){
        str += calculator[numLog[i + 1] - numLog[i]]
    }
    
    return str;
}