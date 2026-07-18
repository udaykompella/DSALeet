/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum(nums, k){
    let sum = 0
    let frequency = new Map()
    let res = 0
    let ques = 0
    frequency.set(0, 1)
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        ques = sum - k
        if(frequency.has(ques)){
            res += frequency.get(ques)
        }
        
        if(frequency.has(sum)){
            frequency.set(sum, frequency.get(sum) + 1)
        }
        else{
            frequency.set(sum, 1)
        }
    }
    return res
}