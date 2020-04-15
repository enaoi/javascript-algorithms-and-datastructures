const swap = (A, i, j) => {
    let temp = A[i]
    A[i] = A[j]
    A[j] = temp
}

export default swap