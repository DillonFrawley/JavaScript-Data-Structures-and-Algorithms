/**
 * @param {number[]} prices
 * @return {number}
 */
// Runtime 83ms, Beats 91.46%, Memory 51.MB, Beats 90.97%
const maxProfit = (prices) => {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit
          if (profit > max_profit) {
              max_profit = profit;
          }
      } else {
        left = right;
      }
      right++;
    }
    return max_profit;
  };