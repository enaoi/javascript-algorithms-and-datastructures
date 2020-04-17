
/**
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/25/
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 输入：[2,2,1]
 * 输出：1
 * 
 * 输入：[4,1,2,1,2]
 * 输出: 4
 * 
 * 除了哈希表操作，还可以用异或操作。
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let res = 0
    for (let i = 0, l = nums.length; i < l; i++) {
        res = res ^ nums[i]
    }
    return res
};

