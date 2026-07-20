/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let arr = strs
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        let sortedVal = arr[i].split("").sort().join().replace(/,/g, "")
        if (map.has(sortedVal)) {
            map.get(sortedVal).push(arr[i])
        }
        else {
            map.set(sortedVal, [arr[i]])
        }
    }
    let extractedAgram = map
    let mergeAgram = []
    extractedAgram.forEach(key => {
        mergeAgram.push(key)
    });
    return mergeAgram
};

