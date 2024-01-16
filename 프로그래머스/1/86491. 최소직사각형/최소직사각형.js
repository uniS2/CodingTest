function solution(sizes) {
    let result = [0, 0];
    for(let [key, value] of sizes.map(s => s.sort((a, b) => a - b))){
        if (!result[0] || (result[0] < key)) result[0] = key;
        if (!result[1] || (result[1] < value)) result[1] = value;
    }
    return result[0] * result[1];
}