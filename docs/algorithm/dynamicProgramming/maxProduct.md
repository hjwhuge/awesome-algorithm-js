### 题目 - 乘积最大子数组

> [leetcode 152](https://leetcode-cn.com/problems/maximum-product-subarray/)

#### 题目描述

给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

测试用例的答案是一个  32-位 整数。

子数组 是数组的连续子序列。

示例：

```js
输入: nums = [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
```

### 代码实现

动态规划实现

- 状态定义：dp[[i,j]]
  - 二维数组，存储每个值的最大乘积和最小乘积
- 状态转移方程（不考虑偶数个负数）：opt[n] = Math.max(dp[i-1] \* a[i], a[i]);
  - 其中 a[i]表示当前值
  - 当前最大乘积为前一个的最大乘积乘以自身
  - 代码具体实现会更加复杂，需要考虑到偶数个负数的情况，而且还要记录下当前值的最小值，用于后续计算
    - 当前的最大值：max[i] = max(prevMax \* a[i], prevMin \* a[i])

```js
var maxProduct = function (nums) {
  let dp = [];
  let res = nums[0];
  for (let i = 0; i < nums.length; i++) {
    dp[i] = [nums[i], nums[i]];
  }
  for (let i = 1; i < nums.length; i++) {
    const prevMax = dp[i - 1][0];
    const prevMin = dp[i - 1][1];
    dp[i][0] = Math.max(
      Math.max(prevMax * nums[i], prevMin * nums[i]),
      nums[i]
    );
    dp[i][1] = Math.min(
      Math.min(prevMax * nums[i], prevMin * nums[i]),
      nums[i]
    );
    res = Math.max(res, dp[i][0]);
  }
  return res;
};
```
