/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const arraysize = nums.length / 2;
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    for (let [key, value] of map) {
        if (value > arraysize) {
            return key;
        }
    }
};