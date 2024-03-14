function solution(n, arr1, arr2) {
    let result = new Array(n).fill('');
    
    arr1 = arr1.map((v) => {
        v = v.toString(2);
        if (v.length < n) {
            return '0'.repeat(n - v.length) + v;
        }
        return v;
    })
    
    arr2 = arr2.map((v) => {
        v = v.toString(2);
        if (v.length < n) {
            return '0'.repeat(n - v.length) + v;
        }
        return v;
    })
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if (arr1[i][j] == 1 || arr2[i][j] == 1) result[i] += '#';
            else result[i] += ' ';
        }
    }
    
    return result;
}