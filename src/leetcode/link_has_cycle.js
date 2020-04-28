/**
 * https://leetcode-cn.com/problems/linked-list-cycle/submissions/
 * 哈希表的解决方法，空间复杂度是O(n)
 * @param {*} head
 * @returns
 */
var hasCycle = function (head) {
    let nodes = new Map();
    while (head) {
        if (nodes.has(head)) {
            return true;
        }
        nodes.set(head, null)
        head = head.next
    }
    return false
};


/**
 * 双指针：快指针每次走2步，慢指针每次走1步。如果循环，快指针必然会追上慢指针。
 *
 * @param {*} head
 * @returns
 */
var hasCycle = function (head) {
    if (head === null || head.next === null) {
        return false
    }
    let slow = head,
        fast = head.next;
    while (slow !== fast) {
        if (fast === null || fast.next === null) {
            return false
        }
        slow = slow.next;
        fast = fast.next.next
    }
    return true
}