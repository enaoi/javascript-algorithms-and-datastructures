/**
 *
 * https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/submissions/
 * 
 * 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
 * 返回删除后的链表的头节点。
 * 
 */
/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    if (head.val === val) {
        let cur = head.next
        head.val = cur.val
        head.next = cur.next
    } else {
        let cur = head
        while (cur.next.val !== val) {
            cur = cur.next
        }
        let next = cur.next.next;
        cur.next.next = null;
        cur.next = next;
    }
    return head
};
// 处理头和其它的逻辑不一样，加入dummyNode后可解决这个问题。
var deleteNode = function (head, val) {
    let dummy_node = new ListNode()
    dummy_node.next = head;
    let cur = dummy_node
    while (cur.next.val !== val) {
        cur = cur.next
    }
    let next = cur.next.next;
    cur.next.next = null;
    cur.next = next;
    // 不能返回head，因为head有可能已被删除
    return dummy_node.next
};


