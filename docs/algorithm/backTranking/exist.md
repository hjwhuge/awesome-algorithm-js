### 题目 - 矩阵中的路径

> [leetcode 剑指 offer 12](https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/)

#### 题目描述

给定一个  m x n 二维字符网格  board 和一个字符串单词  word 。如果  word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

示例：

```js
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
```

### 实现思路

> 应用回溯算法求解，问题由多个步骤组成，并且每个步骤都有多个选项。

依次验证 path 中的每个字符（多个步骤），每个字符可能出现在多个方向（多个选项）

递归步骤解析

- 递归参数： 当前元素在矩阵 board 中的行列索引 row 和 col ，当前目标字符在 word 中的索引 k，用于标记是否已经访问的 visited 数组
- 终止条件：
  - 返回 false
    - 行或列索引越界
    - 当前矩阵元素与目标字符不同
      - 如果当前走的是一条正确的路径，那么矩阵中当前元素，即第 col、第 row 行的字符串必定会等于 word 中 k 个字符串，即 board[col][row] === word[k]
    - 当前矩阵元素已访问过
  - 返回 true
    - k = word.length - 1 ，即字符串 word 已全部匹配
- 递推过程：
  - 标记当前节点已经访问：visited[index] = true;
  - 递归搜索下一个单元格，不断寻找四个方向是否满足条件，满足条件再往更深层递归，不满足向上回溯
  - 如果回溯到最外层，则当前字符匹配失败，将当前字符标记为未访问：visited[index] = false;

### 代码实现

#### 回溯算法

> 也可以理解为 dfs + 剪枝实现

```js
var exist = function (board, word) {
  word = word.split("");
  const rows = board[0].length;
  const cols = board.length;
  // 定义一个状态数组，标记哪些已经走过的
  let visited = new Array(rows * cols).fill(false);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // 从任意位置开始出发
      if (hasPathCore(board, row, col, rows, cols, word, visited, 0)) {
        return true;
      }
    }
  }
  return false;
};

function hasPathCore(board, row, col, rows, cols, word, visited, k) {
  // 通过行和列在visited找出对应值
  const index = row * cols + col;
  // 递归终止条件，超出边界、已经访问过、与路径不匹配
  if (
    row < 0 ||
    col < 0 ||
    row >= rows ||
    col >= cols ||
    board[col][row] != word[k] ||
    visited[index]
  ) {
    return false;
  }
  // 表示字符串 word 已全部匹配
  if (k === word.length - 1) {
    return true;
  }
  visited[index] = true;
  // 往上下左右四个方向接着递归
  if (
    hasPathCore(board, row + 1, col, rows, cols, word, visited, k + 1) ||
    hasPathCore(board, row - 1, col, rows, cols, word, visited, k + 1) ||
    hasPathCore(board, row, col + 1, rows, cols, word, visited, k + 1) ||
    hasPathCore(board, row, col - 1, rows, cols, word, visited, k + 1)
  ) {
    return true;
  }
  visited[index] = false;
  return false;
}
```
