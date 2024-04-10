function solution(progresses, speeds) {
    progresses = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));

    let result = [1];
    let cur = progresses.shift();
    
    for(let i = 0; i < progresses.length; i++){
        if(cur >= progresses[i]){
            result[result.length - 1]++;
        } else {
            cur = progresses[i];
            result[result.length] = 1;
        }
    }
    
    return result;
}