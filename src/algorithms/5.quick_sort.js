import swap from '../utils/swap.js'
const quickSort = (A, lo = 0, hi = A.length) => {
    if (hi - lo <= 1) return A;
    let p = partition(A, lo, hi)
    quickSort(A, lo, p)
    quickSort(A, p + 1, hi)
    return A
}


const partition = (A, lo, hi) => {
    let i = lo,
        j = hi - 1;
    const base = A[j];

    while (i < j) {
        if (A[i] < base) {
            i++
        } else {
            swap(A, i, --j)
        }
    }

    swap(A, j, hi - 1)
    return j
}


export default quickSort



// 详细步骤

const quickSort = function(list) {
    if (arr.length <= 1) return list;
    let pivotIndex = Math.floor(list.length / 2)
    let lesser = [],
        greater = [],
        pivot = list.splice(pivotIndex, 1)[0];
    for (let i = 1, l = list.length; i < l; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i])
        } else {
            greater.push(list[i])
        }
    }
    return quickSort(lesser).concat(pivot, quickSort(greater))
}


function quickSortES6(arr) {
    if (arr.length <= 1) return arr;
    let [pivot, ...reset] = arr;
    return [
        ...quickSort(reset.filter(item => item < pivot)),
        pivot,
        ...quickSort(reset.filter(item => item >= pivot))
    ]
}

function swap(arr, i, k) {
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
}

function quickSort(arr) {
    function partition(arr, left, right) {
        let storeIndex = left;
        let pivot = arr[right]; // 直接选最右边的元素为基准元素
        for (let i = left; i < right; i++) {
            if (arr[i] < pivot) {
                swap(arr, storeIndex, i);
                storeIndex++; // 交换位置后，storeIndex 自增 1，代表下一个可能要交换的位置
            }
        }
        swap(arr, storeIndex, right); // 将基准元素放置到最后的正确位置上
        return storeIndex;
    }

    function sort(arr, left, right) {
        if (left > right) {
            return;
        }
        let storeIndex = partition(arr, left, right);
        sort(arr, left, storeIndex - 1);
        sort(arr, storeIndex + 1, right);
    }

    sort(arr, 0, arr.length - 1);
    return arr;
}


function quickSort(arr, start, end) {
    if (start >= end) return array;
}




function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) { // 分区操作
    var pivot = left, // 设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}