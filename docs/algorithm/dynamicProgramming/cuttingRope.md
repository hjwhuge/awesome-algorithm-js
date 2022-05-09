### 题目 - 剪绳子

> [leetcode 剑指 offer 14](https://leetcode-cn.com/problems/jian-sheng-zi-lcof/)

#### 题目描述

给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n 都是整数，n>1 并且 m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]_k[1]_...\*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是 8 时，我们把它剪成长度分别为 2、3、3 的三段，此时得到的最大乘积是 18。

示例：

```js
输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
```

### 代码实现

#### 动态规划实现

- 状态定义：dp[i]，每一个子问题的最优解
  - 第 i 个元素表示把长度为 i 的绳子剪成若干段之后乘积最大值
- 状态转移方程：f(n) = max(f(i) \* f(n - i))
  - 其中 0 < i < n
- 实现方式也是从下往上递推

```js
var cuttingRope = function (n) {
  // 2和3直接返回结果
  if (n === 2) return 1;
  if (n === 3) return 2;
  // 前4个不满足dp[i]为第i个元素乘积最大值，只是为了方便后续计算
  let maxList = [0, 1, 2, 3];
  // 从下往上递推，避免重复计算
  for (let i = 4; i <= n; i++) {
    let max = 0;
    // 终止循环条件，前后两部分结果是一致的
    for (let j = 1; j <= i / 2; j++) {
      // 轮询所有情况，求出当前i的最大值
      max = Math.max(max, maxList[j] * maxList[i - j]);
    }
    maxList[i] = max;
  }
  return maxList[n];
};
```

#### 贪心实现

> 乘积最大即 n >= 5 时，尽可能的多的把绳子长度剪为 3；n = 4 时，把绳子剪为两个长度为 2

```js
var cuttingRope = function (n) {};
```
