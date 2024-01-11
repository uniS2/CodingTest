function solution(order) {
    // 아메리카노: 4500, 카페라테: 5000
    return order.map(o => o.includes('cafelatte') ? 5000 : 4500).reduce((a, b) => a + b, 0)
}