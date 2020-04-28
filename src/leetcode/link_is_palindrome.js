/**
 * 
 * https://leetcode-cn.com/problems/palindrome-linked-list/submissions/
 * 1. 先将链表放入数组。
 * 2. 用双指针方法判断数组是否是回文。
 * @param {*} head
 * @returns
 */
var isPalindrome = function (head) {
    let vals = [], node = head;
    while (node) {
        vals.push(node.val)
        node = node.next
    }
    let i = 0, j = vals.length - 1;
    while (i < j) {
        if (vals[i] === vals[j]) {
            i++;
            j--;
        } else {
            return false
        }
    }
    return true
};