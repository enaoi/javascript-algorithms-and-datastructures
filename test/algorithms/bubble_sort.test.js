import assert from 'assert'
import bubbleSort from '@algorithms/bubble_sort.js'


describe('冒泡排序：', function() {
    it('当插入数组为null时，返回空数组[]', function() {
        assert.deepEqual(bubbleSort(), [])
    })
    it('当插入数组为空数组时，返回空数组[]', function() {
        assert.deepEqual(bubbleSort([]), [])
    })
    it('当插入数组为[3,2,1,0]，返回数组[0,1,2,3]', function() {
        assert.deepEqual(bubbleSort([3, 2, 1, 0]), [0, 1, 2, 3])
    })
    it('当插入数组为[3,2,2,1,0]，返回数组[0,1,2,2,3,4]', function() {
        assert.deepEqual(bubbleSort([3, 2, 2, 1, 0]), [0, 1, 2, 2, 3])
    })
    it('当插入数组为[3,5,2,9,7]，返回数组[2,3,5,7,9]', function() {
        assert.deepEqual(bubbleSort([3, 5, 2, 9, 7]), [2, 3, 5, 7, 9])
    })
})