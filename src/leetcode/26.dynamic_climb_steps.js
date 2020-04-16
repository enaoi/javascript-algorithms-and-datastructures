/**
 * 动态规划的爬楼梯问题
 *
 * @param {*} n
 * @returns
 */
const getClimbSteps = (n) => {
    if (n <= 1) return 1;
    if (n === 2) return 2;

    let a = 1,
        b = 2,
        count = 0;

    for (let i = 3; i <= n; i++) {
        count = a + b;
        a = b;
        b = count;
    }
    return count
}