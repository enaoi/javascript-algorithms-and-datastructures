/**
 *  https://leetcode-cn.com/explore/learn/card/array-and-string/198/introduction-to-array/770/
 * @param {*} nums 
 */
var pivotIndex = function(nums) {
    if (nums.length < 3) return -1;
    let sum = nums.reduce((s, v) => s += v, 0)
    let i = 0,
        l_sum = 0
    while (i < nums.length) {
        let pivot = (sum - nums[i]) / 2;
        if (l_sum === pivot) { return i; } else {
            l_sum += nums[i]
            i++
        }
    }
    return -1;
};


console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([-1, -1, -1, -1, -1, 0]))
console.log(pivotIndex([-1, -1, -1, -1, 0, 1]))
console.log(pivotIndex([-1, -1, -1, -1, -1, -1]))
console.log(pivotIndex([-1, -1, -1, 0, -1, -1]))