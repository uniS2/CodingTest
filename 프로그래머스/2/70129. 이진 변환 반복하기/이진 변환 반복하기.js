function solution(s) {
    let count = 1;
    let zero = 0;
    
    while(count) {
        zero += s.length - s.replaceAll(0, '').length;
        s = s.replaceAll(0, '').length.toString(2);
        if (s == 1) break;
        count++;
    }
    return [count, zero]
}