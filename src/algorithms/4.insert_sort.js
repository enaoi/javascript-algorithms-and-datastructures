import swap from '../utils/swap.js'

const insertSort = (A) => {
    if (!A) return;
    const len = A.length;
    let i = 1;
    while (i < len) {
        insert(A, 0, i, A[i])
        i++;
    }
    return A
}



const insert = (A, i, j, v) => {
    while (j > 0 && array[j - 1] > temp) {
        A[j] = A[j - 1]
        j--;
    }
    A[j] = v
}

export default insertSort