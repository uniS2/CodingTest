function solution(n) {
    const arr_input = String(n).split('');
    let arr_result = [];
    
    arr_input.forEach((item) => {
        arr_result.push(item);
    })
    
    arr_result = +arr_result.sort((a,b) => b-a).join('');
    return arr_result;
}