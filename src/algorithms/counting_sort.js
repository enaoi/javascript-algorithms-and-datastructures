/**
 * 注意：带排序集合键必须为整数
 *
 * @param {Array} A
 * @returns {Array} C
 */
const countingSort = (A) => {
    let max = Math.max(...A)
        // 累计数组
    let B = Array(max + 1).fill(0)
        // 结果数组
    let C = Array(A.length)
        // 累计位递增
    A.forEach((_, i) => {
        B[A[i]]++
    });

    // 累计求和
    for (let i = 1; i < B.length; i++) {
        B[i] = B[i - 1] + B[i]
    }

    // 得到回写位置
    for (let i = 0; i < A.length; i++) {
        const p = B[A[i]] - 1; // 回写位置
        B[A[i]]-- // 多个的话，新的回写位置
            C[p] = A[i]
    }

    return C
}