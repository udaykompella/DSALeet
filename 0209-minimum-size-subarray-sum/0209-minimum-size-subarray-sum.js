/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let low = 0;
    let sum = 0;
    let res = Infinity;

    for (let high = 0; high < nums.length; high++) {
        sum += nums[high];

        while (sum >= target) {
            let len = high - low + 1;
            res = Math.min(len, res);

            sum -= nums[low];
            low++;
        }
    }

    return res === Infinity ? 0 : res;
};