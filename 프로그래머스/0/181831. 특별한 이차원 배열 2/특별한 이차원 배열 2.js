function solution(arr) {
    let i = 0;
    let j = 0;
    
    for(i; i < arr.length; i++ ){
        for(j; j < arr.length; j++ )
            if ((i !== j) && (arr[i][j] != arr[j][i])) return 0;
    }
    return 1;
}