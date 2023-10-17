function solution(strArr) {
    arr = new Array(strArr.length).fill(0);
    for(let i of strArr){
        arr[i.length] += 1;
    }
    return +arr.sort().slice(-1);
}