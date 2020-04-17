/**
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/solution/shan-chu-lian-biao-de-dao-shu-di-nge-jie-dian-by-l/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let target = head;
    let arr = []
    while (target.next !== null) {
        if (arr.length <= n) {
            arr.push(target)
        } else {
            arr.shfit()
            arr.push(target)
        }
    }
    let node = arr.shift()
    let next = node.next;
    node.val = next.val;
    node.next = next.next
};


// [1,2] n=1  => [2]???