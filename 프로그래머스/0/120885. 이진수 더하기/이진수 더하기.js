function solution(bin1, bin2) {
    bin1 = [...bin1].reverse().map(b => Boolean(Number(b)));
    bin2 = [...bin2].reverse().map(b => Boolean(Number(b)));
    let result = [];
    
    for(let index = 0; index < Math.max(bin1.length, bin2.length); index++){
        if (!result[index]){
            if (bin1[index] && bin2[index]){
                result[index] = false;
                result[index + 1] = true;
            } else if (bin1[index] || bin2[index]) {
                result[index] = true;
            } else {
                result[index] = false;
            }
        } else {
            if (bin1[index] && bin2[index]){
                result[index + 1] = true;
            } else if (bin1[index] || bin2[index]) {
                result[index] = false;
                result[index + 1] = true;
            }
        }
    }
    
    return result.reverse().map(Number).join('');
}