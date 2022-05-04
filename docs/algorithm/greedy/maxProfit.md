### 题目 - 买卖股票的最佳时机 II

> [leetcode 122](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)

#### 题目描述

给你一个整数数组 prices ，其中  prices[i] 表示某支股票第 i 天的价格。

在每一天，你可以决定是否购买和/或出售股票。你在任何时候   最多   只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

返回 你能获得的 最大 利润  。

示例：

```js
输入：prices = [7,1,5,3,6,4]
输出：7
解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出,
        这笔交易所能获得利润 = 5 - 1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出,
        这笔交易所能获得利润 = 6 - 3 = 3 。
     总利润为 4 + 3 = 7 。
```

### 代码实现

#### 贪心实现

遍历数组，如果当天比前一天更贵，则说明可以在前一天买入，当天卖出

```js
var maxProfit = function (prices) {
  let res = 0;
  let n = prices.length;
  for (let i = 1; i < n; i++) {
    res += Math.max(0, prices[i] - prices[i - 1]);
  }
  return res;
};
```
