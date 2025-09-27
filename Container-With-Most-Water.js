/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0
    let [l, r] = [0, height.length-1]
    let area = 0
    while(l < r){
       area = (r - l) * Math.min(height[l],height[r])
       res = Math.max(res, area)
       if(height[l] < height[r]){
            l++
       }else{
            r--
       }
    }
    return res
};