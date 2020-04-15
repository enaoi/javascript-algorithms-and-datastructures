const binarySearch = (A, v) => {
    let lower = 0,
        upper = A.length - 1,
        p;
    while (lower <= upper) {
        p = Math.floor((lower + upper) / 2)
        if (A[p] === v) return p;
        else if (A[p] < v) lower = p + 1;
        else upper = p - 1;
    }

    return -1
}

export default binarySearch