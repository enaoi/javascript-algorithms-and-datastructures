const mergeSort = (A, p = 0, r = A.length) => {
    if (r - p < 2) { return }
    const q = Math.ceil((p + r) / 2)
    mergeSort(A, p, q)
    mergeSort(A, q, r)
    merge(A, p, q, r)
}


const merge = (A, p, q, r) => {
    let A1 = A.slice(p, q);
    let A2 = A.slice(q, r);
    A1.push(Number.MAX_SAFE_INTEGER)
    A2.push(Number.MAX_SAFE_INTEGER)

    for (let i = p, s1 = 0, s2 = 0; i < r; i++) {
        A[i] = A1[s1] < A2[s2] ? A1[s1++] : A2[s2++]
    }
}

let arr = [2, 5, 3, 1, 7]

mergeSort(arr)
console.log(arr)