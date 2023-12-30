function solution(my_string) {
    let anw = '';
    
    [...my_string].forEach(i => {
        if (!anw.includes(i)) anw += i;
    })
    
    return anw;
}