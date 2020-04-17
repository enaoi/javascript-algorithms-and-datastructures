import assert from 'assert';
import containsDuplicate from '../leetcode/array_contain_duplicate.js'

describe("数组:", function() {
    describe("#存在重复元素:", function() {
        it("当数组为空时，返回 false", function() {
            assert.equal(containsDuplicate([]), false)
        })
        it("当数组为[1, 2, 3]，返回false", function() {
            assert.equal(containsDuplicate([1, 2, 3]), false)
        })
        it("当数组为[1, 2, 1]，返回true", function() {
            assert.equal(containsDuplicate([1, 2, 1]), true)
        })
    })
})