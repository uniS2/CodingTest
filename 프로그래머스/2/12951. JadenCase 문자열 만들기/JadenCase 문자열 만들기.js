function solution(s) {
    const result = [...s].map((str, index) => {
        if (index === 0 || s[index - 1] === " "){
           return str.toUpperCase(); 
        } else return str.toLowerCase();
    })
    return result.join('');
}