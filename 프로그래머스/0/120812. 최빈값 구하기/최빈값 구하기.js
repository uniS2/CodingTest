function solution(array) {
    
    let obj = {};
    for(let i = 0; i < array.length; i++){
        obj[array[i]] == null ? obj[array[i]] = 1 : obj[array[i]]++;
    }
    const arr = Object.entries(obj).sort(([a, b], [c, d]) => d - b);
    
    if(arr.length == 1) return array[0];
    return arr[0][1] == arr[1][1] ? -1 : +arr[0][0];
}