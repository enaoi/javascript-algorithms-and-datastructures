/**
 * 桶排序
 *  1. 非比较型
 *  2. 排序健为数字的合集
 *  3. 基数排序是一种特殊的桶排序
 * @param {*} A
 * @param {*} k 桶的数量。需要知道A中数组的大致情况
 * @param {*} S 桶的范围。如0～9为一个桶，S则为10
 */
const bucketSort = (A, k, S) => {
    const buckets = Array.from({ length: k }, () => [])
    // A中的数据放入桶中
    for (let i = 0; i < A.length; i++) {
        let digit = Math.floor(A[i] / S)
        buckets[digit].push(A[i])
    }
    // 对桶进行插入排序
    buckets.forEach(bucket => insert_sort(bucket))
    // 从桶中取出数据
    return [].concat(...buckets)
}