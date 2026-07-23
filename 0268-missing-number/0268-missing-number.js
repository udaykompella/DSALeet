/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
let xor1 = 0;
let xor2 = 0;

for (let i = 0; i < nums.length; i++) {
    xor2 ^= nums[i];
    xor1 ^= (i + 1);
}

return xor1 ^ xor2;
};