var minSubArrayLen = function(target, nums) {
    let low = 0;
    let high = 0;
    let res = Infinity;
    let sum = 0;

    while (high < nums.length) {
        sum += nums[high];

        while (sum >= target) {
            res = Math.min(res, high - low + 1);
            sum -= nums[low];
            low++;
        }

        high++;
    }

    return res === Infinity ? 0 : res;
};