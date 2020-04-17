const all = (arr, fn = Boolean) => arr.every(fn)

const allEqual = arr => arr.every(v => v === arr[0])

const any = (arr, fn = Boolean) => arr.some(fn)

const deepFlatten = arr => {
    while (arr.some(i => Array.isArray(i))) {
        arr = [].concat(...arr)
    }
    return arr;
}

/**
 * 
 * bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true])
 * [ ['beep', 'boop', 'bar'], ['foo'] ]
 *
 * @param {*} arr
 * @param {*} filter
 */
const bitfurcate = (arr, filter) => {
    arr.reduce((r, v, i) => {
        r[filter[i] ? 0 : 1].push(v)
    }, [
        [],
        []
    ])
}


const bitfurcateBy = (arr, fn) => {
    arr.reduce((r, v) => r[fn(v) ? 0 : 1].push(v), [
        [],
        []
    ])
}

/**
 *  chunk([1, 2, 3, 4, 5], 2)
 *  [[1,2],[3,4],5]
 * @param {*} arr
 * @param {*} size
 */
const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(size * i, size * i + size)
    )


/**
 *
 * 特殊版本的数组 forEach 方法
 * @param {Array} [array]
 * @param {Function} iteratee
 * @returns {Array} Returns 'array'
 */
function arrayEach(arr, fn) {
    let index = -1;
    const length = arr.length;
    while (++index < length) {
        if (fn(arr[index], index, arr) === false) {
            break;
        }
    }
    return arr
}

// 多维数组
Array.matrix = function(numrows, numcols, initial) {
    var arr = []
    for (var i = 0; i < numrows; i++) {
        var columns = []
        for (var j = 0; j < numcols; j++) {
            columns[j] = initial
        }
        arr[i] = columns
    }
    return arr
}