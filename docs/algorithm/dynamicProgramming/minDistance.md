### 题目 - 编辑距离

> [leetcode 72](https://leetcode-cn.com/problems/edit-distance/)

#### 题目描述

给你两个单词  word1 和  word2， 请返回将  word1  转换成  word2 所使用的最少操作数  。

你可以对一个单词进行如下三种操作：

- 插入一个字符
- 删除一个字符
- 替换一个字符

示例：

```js
输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
```

### 代码实现

- 动态规划实现

```js
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // 有一个字符串为空字符串
  if (n * m == 0) {
    return n + m;
  }

  // DP 数组
  let dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1));

  // 边界状态初始化
  for (let i = 0; i < m + 1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j < n + 1; j++) {
    dp[0][j] = j;
  }

  // 计算所有 DP 值
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      let left = dp[i - 1][j] + 1;
      let down = dp[i][j - 1] + 1;
      let left_down = dp[i - 1][j - 1];
      // charAt 返回指定位置的字符
      if (word1.charAt(i - 1) != word2.charAt(j - 1)) {
        left_down += 1;
      }
      dp[i][j] = Math.min(left, Math.min(down, left_down));
    }
  }
  return dp[m][n];
};
```
