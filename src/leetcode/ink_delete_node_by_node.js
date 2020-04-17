var deleteNode = function (node) {
    let next = node.next;
    if (next === null) {
        node = null
    } else {
        node.val = next.val;
        node.next = next.next
    }
};