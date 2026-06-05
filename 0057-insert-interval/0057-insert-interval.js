/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let res = []
    let insert = false
    if(intervals.length == 0){
        res.push(newInterval)
    }
    for (let i = 0; i < intervals.length; i++) {
        if(insert == false && intervals[i][0] >= newInterval[0]){
            res.push(newInterval)
            insert = true
        }
        res.push(intervals[i])
        console.log(insert)
    }
    if(!insert){
        res.push(newInterval)
    }
   const result = merge(res)
   return result
};
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    const result = [intervals[0]]
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] <= result[result.length - 1][1]){
            result[result.length - 1][1] = Math.max(intervals[i][1],result[result.length - 1][1])
        }else{
            result.push(intervals[i])
        }
    }
    return result
};