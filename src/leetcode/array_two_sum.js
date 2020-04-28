/**
 *  https://leetcode-cn.com/problems/two-sum/
 *  给定 nums = [2, 7, 11, 15], target = 9
 *  因为 nums[0] + nums[1] = 2 + 7 = 9
 *  所以返回 [0, 1]
 *
 * @param {*} nums
 * @param {*} target
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for (let i = 0, len = nums.length; i < len; i++) {
        let cur = nums[i]
        let key = target - cur
        if (map.has(key)) {
            return [map.get(key), i]
        } else {
            map.set(cur, i)
        }
    }
};