/**
 * https://leetcode-cn.com/problems/find-the-difference/
 *  给定两个字符串 s 和 t，它们只包含小写字母。
 *  字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 *  请找出在 t 中被添加的字母
 *  
 *  
 *  对两段字符串都进行XOR操作。重点是 string.charCodeAt() 和 String.fromCharCode() api
 */
var findTheDifference = function(s, t) {
    const last = t.length - 1;
    let diff = t.charCodeAt(last);
    for (let i = 0; i < last; i++) {
        diff = diff ^ s.charCodeAt(i) ^ t.charCodeAt(i)
    }
    return String.fromCharCode.call(null, diff)
};