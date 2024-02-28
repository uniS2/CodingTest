function solution(cards1, cards2, goal) {
    const restCards1 = goal.filter(g => cards1.includes(g)).filter((g, i) => g != cards1[i]);
    const restCards2 = goal.filter(g => cards2.includes(g)).filter((g, i) => g != cards2[i]);
    return restCards1.length || restCards2.length ? "No" : "Yes";
}