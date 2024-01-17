function solution(myStr) {
    const result = myStr.split(/[a-c]/).filter(c => c);
    return result.length ? result : ["EMPTY"];
}