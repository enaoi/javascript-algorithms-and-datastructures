/**
 * https://leetcode-cn.com/problems/contains-duplicate/
 * 
 * @param {*} nums
 * @returns
 */
const containsDuplicate = (nums) => {
    let map = new Map(),
        i = -1;
    const length = nums.length;
    while (++i < length) {
        if (map.get(nums[i])) {
            return true
        }
        map.set(nums[i], true)
    }
    return false
};

export default containsDuplicate