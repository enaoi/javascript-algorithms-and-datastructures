import swap from '../utils/swap.js'
const bubbleSort = (A) => {
    for (let i = A.length - 1; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            A[j - 1] > A[j] && swap(A, j - 1, j)
        }
    }
    return A
}

export default bubbleSort