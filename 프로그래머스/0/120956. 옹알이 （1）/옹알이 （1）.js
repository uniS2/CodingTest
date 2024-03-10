function solution(babbling) {
    const word = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach((b, index) => {
        for(let i = 0; i < 4; i++){
            babbling[index] = babbling[index].replace(word[i], ' ');
        }
    });
    
    return babbling.length - babbling.filter(b => b.trim()).length;
}