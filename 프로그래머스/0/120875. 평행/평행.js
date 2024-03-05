function solution(dots) {
    let result = 0;
    dots.sort();
    dots.forEach((v, i) => {
        for(let index = i; index < 4; index++){
            let cur = [...dots];
            const one = cur.splice(i, 1)[0];
            const two = cur.splice(index - 1, 1)[0];
            let line1 = (one[1] - two[1]) / (one[0] - two[0]) ;
            let line2 = (cur[0][1] - cur[1][1]) / (cur[0][0] - cur[1][0]) ;
            if (line1 == line2) {
                result = 1;
                break;
            }
        }
    })
    return result;
}