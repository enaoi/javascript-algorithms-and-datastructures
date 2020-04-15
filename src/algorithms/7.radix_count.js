/**
 *  按照相同位有效数字的值分组排序整数
 *
 * @param {*} A
 */
const radixSort = (A) => {
    // 最大值的有效位数代表了最外层循环的次数
    const max = Math.max(...A)

    const buckets = Array.from({ length: 10 }, () => [])
        // 有效数位
    let m = 1;
    while (m < max) {
        // 取出数放入桶里
        A.forEach(number => {
            let digit = Math.floor(number % (m * 10) / m)
            buckets[digit].push(number)
        });
        // 从桶里取出数
        let j = 0;
        buckets.forEach((bucket) => {
            while (bucket.length > 0) {
                // 先进先出原则
                A[j++] = bucket.shift()
            }
        })
        m *= 10
    }
}