/**
 * https://leetcode-cn.com/problems/diagonal-traverse/solution/
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    const length = matrix.length;
    let times = length * length - 1;
    let result = [matrix[0][0]]
    for (let i = 1; i < times; i++) {
        let even = i % 2 === 0
        if (even) {
            // 偶数，x从小到大
            let x = 0
            while (x <= i) {
                matrix[i - x] && result.push(matrix[i - x][i])
                x++;
            }
        } else {
            // 奇数，x从大到小
            let x = i
            while (x >= 0) {
                matrix[i - x] && result.push(matrix[i - x][x])
                x--;
            }
        }
    }
};
let arr = [
    [1, 2],
    [3, 4]
]
console.log(findDiagonalOrder(arr))