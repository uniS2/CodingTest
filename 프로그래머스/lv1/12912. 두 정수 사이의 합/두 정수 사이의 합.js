function solution(a, b) {
    let sum = 0;
    if(a > b){
        let temp = b;
        b = a;
        a = temp;
    }
   while(a <= b){
       sum += a;
       a++
   }
    return sum;
}