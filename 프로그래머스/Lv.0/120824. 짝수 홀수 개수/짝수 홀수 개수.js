function solution(num_list) {
    const odd = num_list.filter(i => (i % 2)).length;
    return [num_list.length - odd, odd]
}