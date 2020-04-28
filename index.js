/**
 *
 * 
 * @param {*} a
 * @param {*} b
 */
var addBinary = function(a, b) {
    let Al = a.length,
        Bl = b.length;
    const max = Al > Bl ? Al : Bl;
    const dummy = new Array(Math.abs(Al - Bl)).fill(0)
    let A = a.split(''),
        B = b.split('')
    if (Al < max) dummy.concat(A);
    if (Bl < max) dummy.concat(B);
    console.log(A)
    console.log(B)
    let Result = [],
        plus = 0;
    for (let i = A.length - 1; i > -1; i--) {
        console.log(plus)
        console.log(A[i], B[i])
        console.log(A[i] ^ B[i])
        console.log(A[i] ^ B[i] === 0)
        if (A[i] ^ B[i] === 0) {
            console.log('lalalla')
            Result[i] = plus
            plus = A[i] === 0 ? 0 : 1
        } else if (plus === 1) {
            Result[i] = 0
            plus = 1
        } else {
            Result[i] = 1
            plus = 0
        }
        console.log('result:', Result[i])
        console.log('----------------')

    }

    return `${plus}${Result.join('')}`

}

console.log(addBinary('1010', '1011'))