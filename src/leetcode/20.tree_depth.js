/** 
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    let depth = 0, nodes = [root]
    while (nodes.length) {
        depth++;
        let child = []
        for (let i = 0; i < nodes.length; i++) {
            let node = nodes[0]
            if (node.left !== null) child.push(node.left)
            if (node.right !== null) child.push(node.right)
        }
        nodes = child
    }
    return depth;
};

var maxDepth = function (root) {
    if (!root) return 0;
    let depth = 0, nodes = [root], start = 0, len = nodes.length;
    while (len > start) {
        depth++;
        for (let i = start; i < len; i++) {
            let node = nodes[i];
            if (node.left !== null) nodes.push(node.left)
            if (node.right !== null) nodes.push(node.right)
        }
        start = len
        len = nodes.length;
    }
    return depth;
};

//TODO: 递归
var maxDepth = function (root) {
    if (root === null) {
        return 0;
    } else {
        let left_height = maxDepth(root.left)
        let right_height = maxDepth(root.right)
        return Math.max(left_height, right_height) + 1
    }
};

//TODO: 迭代
var maxDepth = function (root) {
    let nodes = []
    if (root !== null) {
        nodes.push(root)
    }
    let depth = 0;
    while (nodes.length) {
        depth++;
        let child = []
        for (let i = 0; i < nodes.length; i++) {
            let node = nodes[0]
            if (node.left !== null) child.push(node.left)
            if (node.right !== null) child.push(node.right)
        }
        nodes = child
    }
    return depth;
};