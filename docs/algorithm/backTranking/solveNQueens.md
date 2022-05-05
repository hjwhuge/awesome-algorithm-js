### 题目 - N 皇后

> [leetcode 51](https://leetcode-cn.com/problems/n-queens/)

#### 题目描述

n  皇后问题 研究的是如何将 n  个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回所有不同的  n  皇后问题 的解决方案。

示例：

```js
输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：4 皇后问题存在两个不同的解法。
```

### 代码实现

```js
let result = []; //全局变量,下标表示行,值表示Q存储在哪一列
let solutions = []; //最终输出结果
var solveNQueens = function (n) {
  solutions = [];
  backtrack(0, n);
  return solutions;
};
// 回溯
function backtrack(row, n) {
  if (row === n) {
    // n个棋子都放置好了，打印结果
    printQueens(result, n);
    return; // n行棋子都放好了，已经没法再往下递归了，所以就return
  }
  for (let column = 0; column < n; column++) {
    // 每一行都有n种放法
    if (isOk(row, column, n)) {
      // 有些放法不满足要求
      result[row] = column; // 第row行的棋子放到了column列
      backtrack(row + 1, n); // 考察下一行
    }
  }
}
//判断row行column列是否可以放置皇后
//即使其中任意两个皇后都不同列、同行和在一条斜线上
function isOk(row, column, n) {
  // 左上对角线和右上对角线上的的值
  let leftup = column - 1;
  let rightup = column + 1;
  // 如果result[i] === column说明该位置存在皇后
  for (let i = row - 1; i >= 0; i--) {
    // 逐行往上考察每一行
    if (result[i] == column) return false; // 表示第i行的column列有棋子
    if (leftup >= 0) {
      // 考察左上对角线：第i行leftup列有棋子吗？
      if (result[i] == leftup) return false;
    }
    if (rightup < n) {
      // 考察右上对角线：第i行rightup列有棋子吗？
      if (result[i] == rightup) return false;
    }
    leftup--;
    rightup++;
  }
  return true;
}
// 打印出一个二维矩阵
function printQueens(result, n) {
  let arr = [];
  for (let row = 0; row < n; row++) {
    let str = "";
    for (let column = 0; column < n; column++) {
      if (result[row] == column) str += "Q";
      else str += ".";
    }
    arr.push(str);
  }
  solutions.push(arr);
}
```
