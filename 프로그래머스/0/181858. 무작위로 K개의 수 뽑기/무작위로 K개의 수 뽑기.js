function solution(arr, k) {
    let result = [];
    arr.forEach((v) => {
        if(!result.includes(v) && result.length < k) result.push(v);
    })
    while(result.length != k) result.push(-1);
    return result;
}