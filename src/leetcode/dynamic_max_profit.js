/**
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * @param {*} prices
 * @returns
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0;
    let r = 0,
        min = prices[0];
    for (let i = 1, len = prices.length; i < len; i++) {
        let profit = prices[i] - min;
        min = profit > 0 ? min : prices[i];
        r = profit > r ? profit : r
    }
    return r;
}