function solution(s) {
    let obj = {};
    let result = [];
    [...s].forEach(s => {
        obj[s] = obj[s] == undefined ? 1 : obj[s] + 1;
    })
    for(let [key] of Object.entries(obj).filter(([a, b]) => b === 1)){
        result.push(key);
    }
    return result.length ? result.sort().join('') :  '';
}