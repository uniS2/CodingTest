function solution(arr) {
     return (arr.length > 1)
        ? arr.filter((_, i) => i !== arr.indexOf(Math.min(...arr))) : [-1] ;
}