function solution(date1, date2) {
    // return new Date(date1) < new Date(date2) ? 1 : 0;
    return date1.join('') - date2.join('') < 0 ? 1 : 0;
}