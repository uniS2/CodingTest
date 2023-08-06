function solution(n) {
    const arr_input = String(n);
    const arr_result = arr_input.split('').sort((a,b) => (b-a)).join('');
    
    return +arr_result;
    
}