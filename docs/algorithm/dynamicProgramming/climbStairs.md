### 题目 - 爬楼梯

> [leetcode 70](https://leetcode-cn.com/problems/climbing-stairs/)

#### 题目描述

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

示例：

```js
输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
```

### 代码实现

- 采用动态规划实现
  - 状态定义：只需要用到 2 个变量，存储当前台阶的前两个值
  - 状态转移方程：f(n) = f(n - 1) + f(n - 2)
  - 实现方式也是从下往上递推

```js
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let res = 0;
  let pre = 1;
  let cur = 1;
  for (let i = 1; i < n; i++) {
    res = pre + cur;
    pre = cur;
    cur = res;
  }
  return res;
};
```
