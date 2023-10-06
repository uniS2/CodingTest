function solution(my_string, index_list) {
    let str = '';
    index_list.forEach(i => {
        str += my_string[i]
    })
    return str;
}