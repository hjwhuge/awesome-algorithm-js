### 题目 - 三角形最小路径和

> [leetcode 120](https://leetcode-cn.com/problems/triangle/)

#### 题目描述

给定一个三角形 triangle ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

示例：

```js
输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
解释：如下面简图所示：
   2
  3 4
 6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
```

### 代码实现

- 采用动态规划实现
  - 实现方式从下往上递推
  - 状态定义：以 triangle 最后一项为基础
  - 状态转移方程：dp[i][j] = triangle[i][j] + Math.min(dp[i+1][j], dp[i+1][j+1]);
    - 从 triangle 倒数第二项开始，获取最小路径和
    - 最终结果存储在 dp[0][0]，所以 dp 可以简化成使用一维数组

```js
var minimumTotal = function (triangle) {
  let dp = triangle[triangle.length - 1];
  // 从倒数第二项开始，直到第1项
  for (let i = triangle.length - 2; i >= 0; i--) {
    // 求出最小路径和
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
    }
  }
  // 此时dp[0]即存储着最小路径和
  return dp[0];
};
```
