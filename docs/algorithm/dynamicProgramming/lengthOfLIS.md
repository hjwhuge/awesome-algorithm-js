### 题目 - 最长递增子序列

> [leetcode 300](https://leetcode-cn.com/problems/longest-increasing-subsequence/)

#### 题目描述

给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列   是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

示例：

```js
输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
```

### 代码实现

#### 动态规划实现

- 状态定义：dp[i]
  - 初始每个值的 LIS 都为 1
- 状态转移方程：opt[n] = Math.max(dp[i], dp[j] + 1);
  - 如果当前值比前面某一个更大，则当前值的 LIS 为 前面值的 LIS + 1

```js
var lengthOfLIS = function (nums) {
  if (nums.length < 2) return nums.length;
  let res = 0;
  let dp = [];
  for (let m = 0; m < nums.length; m++) {
    dp[m] = 1;
  }
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        // 保证取到的LIS是最大的
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    // 更新结果
    res = Math.max(res, dp[i]);
  }
  return res;
};
```

#### 二分实现

```js
var lengthOfLIS = function (nums) {};
```
