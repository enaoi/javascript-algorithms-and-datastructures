const all = (arr, fn = Boolean) => arr.every(fn)

const allEqual = arr => arr.every(v => v === arr[0])

const any = (arr, fn = Boolean) => arr.some(fn)

const deepFlatten = arr => {
    while (arr.some(i => Array.isArray(i))) {
        arr = [].concat(...arr)
    }
    return arr;
}

const bitfurcate = (arr, filter) => {
    arr.reduce((r, v, i) => {
        r[filter[i] ? 0 : 1].push(v)
    }, [[], []])
}