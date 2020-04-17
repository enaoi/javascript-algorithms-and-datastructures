/**
 * 
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 输出: [1,2,2,3,5,6]
 * 
 *  除了应用双指针，还可以从尾部开始从最大数字优化！！！
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1,
        p2 = n - 1,
        p = m + n - 1;
    while (p2 > -1) {
        if (p1 <= -1 || nums2[p2] > nums1[p1]) {
            nums1[p--] = nums2[p2--]
        } else {
            nums1[p--] = nums1[p1--]
        }
    }
};