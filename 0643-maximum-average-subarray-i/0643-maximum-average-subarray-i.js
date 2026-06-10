/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let avg = 0
    let low = 0
    let high = k - 1
    let sum = 0
    // let res = 0
    for(let i = low;i<=high;i++){
        sum = sum + nums[i]
    }
    avg = calculateAverage(high,low,sum)
    let res = avg
    while(high < nums.length){
        res = Math.max(avg, res)
        low++
        high++
        if(high === nums.length){
            break
        }
        sum = sum - nums[low - 1]
        sum = sum + nums[high]
        avg = calculateAverage(high,low,sum)
    }
    return res
};

function calculateAverage(high,low,sum){
    return sum / (high - low + 1)
}