/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let i = 0, j = 0;
  const n1 = nums1.length, n2 = nums2.length;
  const n = n1 + n2;
  const nums3 = [];

  while (i < n1 && j < n2) {
    if (nums1[i] < nums2[j]) nums3.push(nums1[i++]);
    else nums3.push(nums2[j++]);
  }
  while (i < n1) nums3.push(nums1[i++]);
  while (j < n2) nums3.push(nums2[j++]);

  if (n % 2 === 1) return nums3[Math.floor(n / 2)];
  return (nums3[n / 2] + nums3[n / 2 - 1]) / 2;
};