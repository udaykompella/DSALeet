/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = nums.reduce((acc, curr) => acc + curr, 0);

    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        let right = sum - nums[i] - left;

        if (left === right) {
            return i;
        }

        left += nums[i];
    }

    return -1;
};