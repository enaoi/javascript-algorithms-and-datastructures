/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 *
 * @param {*} head
 * @returns
 */
const reverseList = function (head) {
    let node = head
    let current = null
    while (node) {
        let temp = node.next;
        node.next = current
        current = node
        node = temp
    }
    return current;
}