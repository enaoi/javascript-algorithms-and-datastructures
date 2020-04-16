
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const MAX_VALUE = Math.pow(2, 31) - 1;  // 2147483647
    const MIN_VALUE = Math.pow(2, 31) * -1; // -2147483648
    let rev = 0;
    while (x !== 0) {
        let pop = x % 10;
        x = parseInt(x / 10);
        rev = rev * 10 + pop
    }
    return (rev > MAX_VALUE || rev < MIN_VALUE) ? 0 : rev;
};
