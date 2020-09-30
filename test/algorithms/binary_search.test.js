import assert from 'assert';
import binarySearch from '@algorithms/binary_search.js'


describe("二分法查找:", function() {
    it("当数组为空时，返回 -1", function() {
        assert.equal(binarySearch([]), -1)
    })
    it("当搜索的值为空时，返回-1", function() {
        assert.equal(binarySearch([1, 2, 3]), -1)
    })
    it("当搜索的值不存在数组中时，返回-1", function() {
        assert.equal(binarySearch([1, 2, 3], 4), -1)
    })
    it("当搜索的值存在数组中时，返回这个位置的下标。[1,2,3]中1的下标为0", function() {
        assert.equal(binarySearch([1, 2, 3], 1), 0)
    })
    it("当搜索的值存在数组中时，返回这个位置的下标。[1,2,3]中3的下标为2", function() {
        assert.equal(binarySearch([1, 2, 3], 3), 2)
    })
})