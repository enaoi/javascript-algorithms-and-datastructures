/**
 * https://leetcode-cn.com/problems/power-of-three/
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while (n >= 3 && (n % 1 === 0)) {
        n = n / 3
    }
    return n === 1
};


// 10进制下 10^1 = 10 10^2 = 100
// 2进制下 2^1 = 10 2^2 = 100
// 依次可以推测：3进制下 3^1 = 10 3^2 = 100
var isPowerOfThree = function(n) {
    let str = n.toString(3)
        // 正则
        // return /^1(0*)$/.test(str)

    if (str.charAt(0) !== '1') return false
    let i = 1,
        len = str.length;
    while (i < len) {
        if (str.charAt(i++) !== '0') return false;
    }
    return true;
};