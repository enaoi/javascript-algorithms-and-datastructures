/**
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}  下标不是从零开始算，所以返回时要+1；
 */
var twoSum = function(numbers, target) {
    let i = 0,
        j = numbers.length - 1;
    while (i < j) {
        let sum = numbers[i] + numbers[j]
        if (sum === target) return [++i, ++j];
        sum < target ? i++ : j--;
    }
};