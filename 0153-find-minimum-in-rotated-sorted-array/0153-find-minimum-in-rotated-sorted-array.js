/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = Infinity;

    for (let num of nums) {
        if (num < min) {
            min = num;
        }
    }

    return min;
};