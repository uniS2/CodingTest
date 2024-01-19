function solution(ineq, eq, n, m) {
    if((ineq === "<") && (eq === "=")) return Number(n <= m);
    else if(ineq === "<") return Number(n < m);
    else if((ineq === ">") && (eq === "=")) return Number(n >= m);
    else return Number(n > m);
}