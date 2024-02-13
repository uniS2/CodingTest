function solution(arr) {
    let result = [...arr];
    let num = 0;

    while(2 ** num < arr.length) num++;
    for(let i = 0; i < 2 ** num - arr.length; i++){
        result.push(0);
    }
    return result;
}