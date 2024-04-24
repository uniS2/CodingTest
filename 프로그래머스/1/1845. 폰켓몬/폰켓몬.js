function solution(nums) {
    let numsObj = {};
    
    for(let i = 0; i < nums.length; i++) {
        numsObj[nums[i]] ? numsObj[nums[i]]++ : numsObj[nums[i]] = 1;
    }
    
    const length = Object.keys(numsObj).length;
    
    return length >= Math.floor(nums.length / 2) ? Math.floor(nums.length / 2) : length;
}