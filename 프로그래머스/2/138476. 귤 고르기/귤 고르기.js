function solution(k, tangerine) {
    let obj = {};
    
    for(let i = 0; i < tangerine.length; i++){
        if(obj[tangerine[i]] > 0) {
            obj[tangerine[i]]++;
        } else {
            obj[tangerine[i]] = 1;
        }
    }
    
    let result = 0;
    const arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    
    while(k > 0){
        k -= arr[result][1];
        result++;
    }
    return result;    
}