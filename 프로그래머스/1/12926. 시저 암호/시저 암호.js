function solution(s, n) {
    return [...s].map(s => {
        let cur = s.charCodeAt() + n;
        if(s.toUpperCase() == s){
            return cur > 90 ? cur - 26 : cur;
        } else {
            return cur > 122 ? cur - 26 : cur;
        }
    }).map(s => s < 65 ? ' ' : String.fromCharCode(s)).join('');
}