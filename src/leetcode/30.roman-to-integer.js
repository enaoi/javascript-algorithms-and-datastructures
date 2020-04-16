/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000

    }
    let sum = 0
    for (let i = 0, l = s.length; i < l; i++) {
        let curValue = symbols[s[i]],
            value = curValue;

        if (i !== l - 1) {
            let nextValue = symbols[s[i + 1]]
            if (curValue < nextValue) {
                value = nextValue - curValue
                i++
            }
        }
        sum += value;
    }

    return sum
};

// @lc code=end

