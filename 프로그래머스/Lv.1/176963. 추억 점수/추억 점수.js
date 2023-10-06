function solution(name, yearning, photo) {
    let obj = {};
    let result = new Array(photo.length).fill(0);  // NaN
    
    for(let i = 0; i < name.length; i++){
        obj[name[i]] = yearning[i];
    }
    
    for(let i in photo){
        for(let j in photo[i]){
            result[i] += (name.includes(photo[i][j])) ? obj[photo[i][j]] : 0;
        }
    }
    return result;
}