/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/submissions/
 * 
 * @param {*} l1
 * @param {*} l2
 * @returns
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) { return l2 }
    if (l2 === null) { return l1 }
    let L = new ListNode(), m1 = l1, m2 = l2, cur = L, prev;
    while (m1 || m2) {
        if (m1 === null) {
            cur.val = m2.val;
            cur.next = m2.next
            return L;
        } else if (m2 === null) {
            cur.val = m1.val;
            cur.next = m1.next
            return L;
        } else if (m1.val <= m2.val) {
            cur.val = m1.val
            m1 = m1.next
        } else if (m1.val > m2.val) {
            cur.val = m2.val;
            m2 = m2.next
        }
        prev = cur
        cur.next = new ListNode()
        cur = cur.next;

    }
    if (prev) { prev.next = null }
    return L
};