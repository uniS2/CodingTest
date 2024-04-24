function solution(nums) {
    const all = new Set(nums).size;
    const max = Math.floor(nums.length / 2);
    
    return all >= max ? max : all;
}