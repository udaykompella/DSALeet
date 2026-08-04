/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let a = s.split("")
    let diff = 0
    let maxcount = 0
    let len = 0
    let low = 0
    let res = 0
    let farr = Array(256).fill(0)
    for (let high = 0; high < a.length; high++) {
        let asciVal = a[high].charCodeAt(0)
        if (farr[asciVal] > 0) {
            farr[asciVal] = farr[asciVal] + 1
        } else {
            farr[asciVal] = 1
        }
        len = high - low + 1
        maxcount = findFreq(farr)
        diff = len - maxcount
        console.log(diff, "diff")
        while (diff > k) {
            let asciValL = a[low].charCodeAt(0)
            // if (farr[asciValL] > 0) {
            //     farr[asciValL] = farr[asciValL] - 1
            //     low++
            // } 
            farr[asciValL] = farr[asciValL] - 1
            low++
            maxcount = findFreq(farr)
            len = high - low + 1
            diff = len - maxcount
        }
        len = high - low + 1
        res = Math.max(len, res)
    }
    return res
};

function findFreq(arr) {
    return Math.max(...arr)
}