/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = 0,
        second = null;
    for (let i = 1, length = nums.length; i < length; i++) {
        if (nums[i] > nums[max]) {
            second = nums[max];
            max = i;
        } else if (nums[i] > second) {
            second = nums[i];
        }
    }
    return (nums[max] >= second * 2) ? max : -1;
};


console.log(dominantIndex([1, 2, 3, 4]))