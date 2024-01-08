function solution(my_string, indices) {
    return [...my_string].filter((v, i) => {
        if(!indices.includes(i)) return v;
    }).reduce((a, b) => a + b, '')
}