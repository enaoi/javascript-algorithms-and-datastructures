/**
 *
 * 
 * @param {*} a
 * @param {*} b
 */
function addBinary(a, b) {
    let Al = a.length,
        Bl = b.length,
        n = Math.max(Al, Bl),
        curry = 0,
        answer = [];
    while (n > 0) {
        if (Al > 0 && a[--Al] === '1') curry += 1;
        if (Bl > 0 && b[--Bl] === '1') curry += 1;
        answer[--n] = curry % 2
        curry = parseInt(curry / 2)
    }
    if (curry > 0) answer.unshift(curry)
    return answer.join('')
}