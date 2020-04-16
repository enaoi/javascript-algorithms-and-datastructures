
/**
 *  https://leetcode-cn.com/problems/plus-one/submissions/
 *  给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *  最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *  你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 *  输入: [1,2,3]
 *  输出: [1,2,4]
 *  解释: 输入数组表示数字 123。
 * 
 * @param {*} digits
 */
var plusOne = function (digits) {
    let res = [],
        l = digits.length - 1,
        hi = 1;
    while (l > -1) {
        let num = digits[l] + hi;
        if (num === 10) {
            res[l--] = 0;
            hi = 1
        } else {
            res[l--] = num;
            hi = 0
        }
    }
    if (hi === 1) res.unshift(1)
    return res
}


var plusOne = function (digits) {
    // 大数失真的问题
    return (parseInt(digits.join('')) + 1).toString().split('')
};

// 使用BigInt   
var plusOne = function (digits) {
    // 可以用在一个整数字面量后面加 n 的方式定义一个 BigInt
    return (BigInt(digits.join('')) + 1n).toString().split('')
};

