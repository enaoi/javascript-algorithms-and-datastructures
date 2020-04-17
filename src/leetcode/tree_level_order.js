/**
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let levels = []
    if (!root) return levels;
    let nodes = [
        [root]
    ]

    while (nodes.length) {
        let list = nodes.shift(),
            res = [],
            childs = [];
        while (list.length) {
            let cur = list.shift()
            res.push(cur.val)
            if (cur.left !== null) childs.push(cur.left)
            if (cur.right !== null) childs.push(cur.right)
        }
        if (childs.length) nodes.push(childs)
        levels.push(res)
    }
    return levels
};