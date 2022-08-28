### 题目 - 机器人的运动范围

> [leetcode 剑指 offer 13](https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/)

#### 题目描述

地上有一个 m 行 n 列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于 k 的格子。例如，当 k 为 18 时，机器人能够进入方格 [35, 37] ，因为 3+5+3+7=18。但它不能进入方格 [35, 38]，因为 3+5+3+8=19。请问该机器人能够到达多少个格子？

示例：

```js
输入：m = 2, n = 3, k = 1
输出：3

输入：m = 3, n = 1, k = 0
输出：1
```

### 代码实现

```js
var movingCount = function (m, n, k) {
  // 边界值判断
  if (m <= 0 || n <= 0 || k < 0) {
    return 0;
  }
  let visited = new Array(m * n).fill(false);
  const count = movingCountCore(k, m, n, 0, 0, visited);
  return count;

  // 回溯主函数，判断当前格子是否满足要求，如果满足，接着判断周围四个格子的情况
  function movingCountCore(k, rows, cols, row, col, visited) {
    let count = 0;
    if (check(k, rows, cols, row, col, visited)) {
      visited[row * cols + col] = true;
      count =
        1 +
        movingCountCore(k, rows, cols, row, col - 1, visited) +
        movingCountCore(k, rows, cols, row, col + 1, visited) +
        movingCountCore(k, rows, cols, row + 1, col, visited) +
        movingCountCore(k, rows, cols, row - 1, col, visited);
    }
    return count;
  }

  // 用于判断单前位置是否满足题意
  function check(k, rows, cols, row, col, visited) {
    if (
      row >= 0 &&
      row < rows &&
      col >= 0 &&
      col < cols &&
      getDigitSum(row) + getDigitSum(col) <= k &&
      !visited[row * cols + col]
    ) {
      return true;
    }
    return false;
  }

  //   用于计算当前格子的位数和;
  function getDigitSum(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.trunc(num / 10);
    }
    return sum;
  }
};
```
