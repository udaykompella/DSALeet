/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let n = nums.length;
    if(n == 0) return 0;
    let longest = 1;
    let s = new Set()
    for(let i = 0; i < n; i++){
        s.add(nums[i])
    }
    for(const val of s){
        if(!s.has(val - 1)){
            let count = 1;
            let x = val
            while(s.has(x + 1)){
                x = x + 1
                count = count + 1
            }
            longest = Math.max(longest, count)
        }
    }
    return longest
};