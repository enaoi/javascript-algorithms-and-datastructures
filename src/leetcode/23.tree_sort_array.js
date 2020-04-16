/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null
}

let nums = [-10, -3, 0, 5, 9]

var sortedArrayToBST = function(nums) {
    return helper(nums, 0, nums.length - 1)
}

var helper = function(nums, left, right) {
    if (left > right) { return null; }
    let p = Math.ceil((left + right) / 2)
    let root = new TreeNode(nums[p])
    root.left = helper(nums, left, p - 1)
    root.right = helper(nums, p + 1, right)
    return root
}


let root = new TreeNode(3)
root.left = new TreeNode(1)
root.right = new TreeNode(5)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(6)




var levelOrder = function(root) {
    if (!root) return [];
    let nodes = [
        [root]
    ]
    let levels = []
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


console.log(levelOrder(root))

const DFS_Preorder = (node, fn) => {
    if (node != null) {
        fn(node.val)
        DFS_Preorder(node.left, fn)
        DFS_Preorder(node.right, fn)
    }
}


let preTreeToArray = function(node) {
    let arr = [];
    DFS_Preorder(node, (val) => arr.push(val))
    return arr
}




const DFS_Inorder = (node, fn) => {
    if (node != null) {
        DFS_Inorder(node.left, fn)
        fn(node.val)
        DFS_Inorder(node.right, fn)
    }
}

let inTreeToArray = function(node) {
    let arr = [];
    DFS_Inorder(node, (val) => arr.push(val))
    return arr
}


const DFS_postOrder = (node, fn) => {
    if (node != null) {
        DFS_postOrder(node.left, fn)
        DFS_postOrder(node.right, fn)
        fn(node.val)
    }
}

let postTreeToArray = function(node) {
    let arr = [];
    DFS_postOrder(node, (val) => arr.push(val))
    return arr
}



let BFS_order = (node, fn) => {
    let nodes = [node]
    while (nodes.length) {
        let cur = nodes.shift()
        if (cur.left != null) nodes.push(cur.left)
        if (cur.right != null) nodes.push(cur.right)
        fn(cur.val)
    }
}

let bfsTreeToArray = function(node) {
        let arr = [];
        BFS_order(node, (val) => arr.push(val))
        return arr
    }
    // console.log(bfsTreeToArray(sortedArrayToBST(nums)))


// prevOrder : [3, 1, 0, 2,5, 4, 6]
// Inorder: [0, 1, 2, 3, 4, 5, 6]
// postOrder: [ 0, 2, 1, 4, 6, 5, 3]