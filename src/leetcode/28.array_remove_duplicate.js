const removeDuplicates = function(nums) {
    let index = 1;
    let start = 0;
    let lenth = nums.length;

    if (lenth < 2) return nums.length;
    while (index < lenth) {
        if (nums[index] === nums[start]) {
            index++
        } else {
            start++;
            if (start < index) nums[start] = nums[index]
            index++;
        }
    }
    // 删除多余的结点
    nums.length = start + 1;
    return nums

};