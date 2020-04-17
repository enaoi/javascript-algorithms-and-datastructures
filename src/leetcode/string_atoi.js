
/**
 * 1. 丢弃无用的开头空格字符
 * 2. 第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号
 * 3. 第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数
 * 4. 字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略
 * 5. 第一个非空格字符不是一个有效整数字符,字符串为空或字符串仅包含空白字符时,返回0。
 *
 * TODO: 3.14159 居然是 3 而不是 314159......
 * @param {*} str
 * 
 * 
 */
const atoi = function (str) {
    str = str.replace(/\s/g, "");
    if (!str.length) return 0;
    let valid = new RegExp(/^[0-9\+\-]./)
    if (!valid.test(str)) return 0;
    let sign = 1, num = 0
    if (str[0] === '-') { sign = -1 }
    else if (str[0] === "+") {
        sign = 1
    } else {
        num = str[0]
    }
    let i = 1;
    const MAX_NUM = Math.pow(2, 31)
    console.log("str:", str)
    while (i < str.length) {
        let v = parseInt(str[i])
        console.log(v)
        if (!Number.isNaN(v)) {
            num = num * 10 + v
        }
        i++
    }

    if (sign === -1 && num > MAX_NUM) {
        return sign * MAX_NUM
    }

    if (sign === 1 && num >= MAX_NUM) {
        return MAX_NUM - 1
    }
    console.log("num", num)
    console.log(sign)
    return num * sign

}

let str = "3.14159"
console.log(atoi(str))