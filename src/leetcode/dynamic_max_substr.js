/**
 *
 * let  [-2,1,-3,4,-1,2,1,-5,4],
 * 子数组最少一个元素
 * @param {*} nums
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0];
    let max_sum = nums[0],
        max_sum_all = nums[0];
    for (let i = 1, l = nums.length; i < l; i++) {
        max_sum = max_sum <= 0 ? nums[i] : nums[i] + max_sum;
        if (max_sum_all < max_sum) max_sum_all = max_sum;
    }
    return max_sum_all
};