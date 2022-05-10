### 题目 - 零钱兑换

> [leetcode 322](https://leetcode-cn.com/problems/coin-change/)

#### 题目描述

给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回  -1 。

你可以认为每种硬币的数量是无限的。

示例：

```js
输入：coins = [1, 2, 5], amount = 11
输出：3
解释：11 = 5 + 5 + 1
```

### 代码实现

#### 递归 + 记忆化实现

#### 动态规划实现

找出最优子结构，是很重要的一步

- 状态定义：dp[i]，总金额为 i 时，最小的硬币数
- 状态转移方程：f(i) = min( f(i), f(i-c) + 1 )
  - 其中 c 表示满足最小硬币数时候，硬币的面值， 取值范围 0 ~ coins.length
- 实现方式也是从下往上递推

```js
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      // 防止越界
      if (i - dp[i - coins[j]] >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};
```
