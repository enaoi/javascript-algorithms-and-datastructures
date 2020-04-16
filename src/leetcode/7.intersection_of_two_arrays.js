/**
 * 
 *
 * @param {*} nums1
 * @param {*} nums2
 */
var intersection = function (nums1, nums2) {
    let map = new Map(),
        res = []
    nums1.forEach((v) => {
        if (!map.has(v)) {
            map.set(v, true)
        }
    });
    nums2.forEach((v) => {
        if (map.has(v)) {
            res.push(v)
            map.delete(v)
        }
    })
    return res
};