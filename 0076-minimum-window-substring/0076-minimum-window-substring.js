/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let have = s.split("")
    let needed = t.split("")
    let len = 0
    let low = 0
    let res = Infinity
    let sarr = Array(256).fill(0)
    let tarr = Array(256).fill(0)
    let tarrFreq
    let sarrFreq
    let start
    for (let i = 0; i < needed.length; i++) {
        let asciVal = needed[i].charCodeAt(0)
        tarrFreq = insertFreq(asciVal, tarr)
    }
    for (let high = 0; high < have.length; high++) {
        let asciVal = have[high].charCodeAt(0)
        sarrFreq = insertFreq(asciVal, sarr)
        while (compareFreq(sarrFreq, tarrFreq)) {
            len = high - low + 1
            if (len < res) {
                res = len
                start = low
            }
            let asciValL = have[low].charCodeAt(0)
            sarrFreq[asciValL] = sarrFreq[asciValL] - 1
            low++
        }
    }
    return s.substring(start, start + res)
};

function insertFreq(asciVal, arr) {
    if (arr[asciVal] > 0) {
        arr[asciVal] = arr[asciVal] + 1
    } else {
        arr[asciVal] = 1
    }
    return arr
}
function compareFreq(hav, need) {
    for (let i = 0; i < 256; i++) {
        if (hav[i] < need[i]) {
            return false;
        }
    }
    return true;
}
