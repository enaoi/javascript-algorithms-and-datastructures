/**
 * https://leetcode-cn.com/problems/house-robber/
 * 打劫最优的问题
 *
 * @param {*} nums
 */
const rob = (nums) => {
    if (!nums.length) return 0;
    let s1 = 0,
        s2 = 0,
        s3 = nums[0];
    for (let i = 1, l = nums.length; i < l; i++) {
        let v = s1 > s2 ? s1 : s2;
        s1 = s2;
        s2 = s3;
        s3 = v + nums[i];

    }
    return s3 > s2 ? s3 : s2
}


// 测试案例 [1,3,1,3,100]  => 103
//  [2,1,1,2] => 4
// [1,2,3,1] => 4
// [2,7,9,3,1] => 12

let arr = [2, 7, 9, 3, 1]
console.log(rob(arr))


// 官方的方案: f(k) = max( f(k-2)+x, f(k-1) )
// public int rob(int[] num) {
//     int prevMax = 0;
//     int currMax = 0;
//     for (int x : num) {
//         int temp = currMax;
//         currMax = Math.max(prevMax + x, currMax);
//         prevMax = temp;
//     }
//     return currMax;
// }

function rob(nums) {
    let prevMax = 0,
        currMax = 0;
    for (let i = 0, l = nums.length; i < l; i++) {
        let temp = currMax;
        currMax = Math.max(prevMax + nums[i], currMax);
        prevMax = temp
    }

    return currMax

}

let arr = [2, 1, 1, 2]
console.log(rob(arr))