function solution(sides) {
    let x = 1;
    let result = 0;
    while(x <= sides[0] + sides[1]){
        let temp = [...sides, x].sort((a, b) => a - b);
        if (temp[2] < temp[0] + temp[1]){
            result++;
        }
        x++;
    }
    return result;
}