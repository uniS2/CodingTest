function solution(myString, pat) {
    let str = myString.replaceAll('B', 'a').replaceAll('A', 'b').toUpperCase();
    return +str.includes(pat);    
}