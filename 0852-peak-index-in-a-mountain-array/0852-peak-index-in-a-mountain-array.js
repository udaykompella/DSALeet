/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let l = 0
    let h = arr.length - 1
    let peak = 0
    while(l <= h){
        let guess = Math.floor((l + h) / 2)
        if(arr[guess] < arr[guess + 1] ) l = guess + 1
        else{
          peak = guess
          h = guess - 1  
        } 
    }
    return peak
};