### 题目 - N 皇后 II

> [leetcode 52](https://leetcode-cn.com/problems/n-queens-ii/)

#### 题目描述

> 和 51 题区别是本题只用返回解决方案个数

n  皇后问题 研究的是如何将 n  个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。

示例：

```js
输入：n = 1
输出：1
解释：1 皇后问题存在1个不同的解法。
```

### 代码实现

#### 回溯思想实现

可以参考 51 题实现

#### 位运算实现

```js
var totalNQueens = function (n) {
  if (n < 1) return;
  let count = 0;
  dfs(0, 0, 0, 0, n);
  return count;

  //row：当前行
  //col：放置皇后的位置
  //pie：可以攻击的左倾斜对角线
  //na：可以攻击的右倾斜对角线
  function dfs(row, col, pie, na, n) {
    //递归终止 统计解法
    if (row >= n) {
      count += 1;
      return;
    }
    // & 运算左边：获取当前空位 标识为1 ；& 运算右边：从右向左，大于n的位置都变成0
    // 最终获得所有可以放置皇后的空位
    let bits = ~(col | pie | na) & ((1 << n) - 1);
    while (bits) {
      // 获取到bits中最低位的1
      const p = bits & -bits;
      /**
        col | p 表示 p 位被占用，即可以被攻击到
        (pie | p) << 1 ,表示pie往斜左方移一位 被占用，即可以被攻击到
        (na | p) >> 1,表示na往斜右方移一位 被占用，即可以被攻击到
      **/
      dfs(row + 1, col | p, (pie | p) << 1, (na | p) >> 1, n);
      // 清除掉最低位的1，表示已经放置了皇后
      bits = bits & (bits - 1);
    }
  }
};
```
