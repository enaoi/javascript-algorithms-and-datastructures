/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** 
 * 递归
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    helper(root, null, null)
};


var helper = function(node, lower, upper) {
    if (!node) return true;
    const val = node.val;
    if (lower !== null && val <= lower) return false;
    if (upper !== null && val >= upper) return false;

    if (!helper(node.left, lower, val)) return false
    if (!helper(node.right, val, upper)) return false
    return true
}


// 迭代：深度优先搜索

var isValidBST = function(root) {
    let stack = [],
        lowers = [],
        uppers = [];

    function update(root, lower, upper) {
        stack.push(root)
        lowers.push(lower)
        uppers.push(upper)
    }

    let lower = null,
        upper = null,
        val;
    update(root, lower, upper)

    while (stack.length) {
        let node = stack.shift()
        let lower = lowers.shift()
        let upper = uppers.shift()

        if (node === null) continue;
        val = node.val;
        if (lower !== null && val <= lower) return false;
        if (upper !== null && val >= upper) return false;
        update(node.left, lower, val)
        update(node.right, val, upper)
    }
    return true

}


function isValidBST(root) {
    let stacks = [],
        lowers = [],
        uppers = [];

    function update(node, lower, upper) {
        stacks.push(node)
        lowers.push(lower)
        uppers.push(upper)
    }

    let lower = null,
        upper = null,
        val;

    update(root, lower, upper)

    while (stacks.length) {
        lower = lowers.shift()
        node = uppers.shift()
        let node = stacks.shift();

        if (node === null) continue
        val = node.val;
        if (lower !== null && val <= lower) return false;
        if (upper !== null && val >= upper) return false;
        node.left !== null && update(node.left, lower, val)
        node.right !== null && update(node.right, val, upper)
    }
    return true

}