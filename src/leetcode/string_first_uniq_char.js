/**
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const arr = s.split('')
    let map = new Map(),
        r = arr.length,
        l = 0
    while (l < r) {
        let v = arr[l]
        if (map.has(v)) {
            map.set(v, null)
        } else {
            map.set(v, l)
        }
        l++;
    }
    for (let value of map.values()) {
        if (value !== null) return value
    }
};


let s1 = "leetcode" //=> 0
let s2 = "loveleetcode" // => 2

console.log(firstUniqChar(s2))