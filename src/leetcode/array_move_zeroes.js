

/**
 *  https://leetcode-cn.com/problems/move-zeroes/
 *  给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *   
 *   输入: [0,1,0,3,12]
 *   输出: [1,3,12,0,0]
 * 
 *   1. 必须在原数组上操作，不能拷贝额外的数组。
 *   2. 尽量减少操作次数。
 */

/**
* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
*/
// 该解法执行时间过长
var moveZeroes = function (nums) {
    let count = 0, i = 0, len = nums.length;
    while (count < len) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
        } else {
            i++
        }
        count++
    }
};


var moveZeroes = function (nums) {
    let i = 0, j = 1, len = nums.length;
    while (j < len) {
        if (nums[i] === 0 && nums[j] !== 0) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++;
        } else if (nums[i] !== 0) {
            i++;
        }
        j++;
    }
};

var moveZeroes = function (nums) {
    let i = 0;
    for (let j = 1; i < nums.length; j++) {
        if (nums[i] === 0 && nums[j] !== 0) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++;
        } else if (nums[i] !== 0) {
            i++;
        }
    }
};