function solution(n, numlist) {
    return numlist.filter(i => !(i % n))
}