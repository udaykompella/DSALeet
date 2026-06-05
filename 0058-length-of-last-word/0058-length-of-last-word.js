/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.trim().split(' ').pop().length
    return arr
};