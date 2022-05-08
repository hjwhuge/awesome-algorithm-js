### 题目 - 括号生成

> [leetcode 22](https://leetcode-cn.com/problems/generate-parentheses/)

#### 题目描述

数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例：

```js
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
```

### 代码实现

深度优先搜索

- 题目可以理解为共有 2n 个位置，其中左括号和右括号各占 n 个位置，从第二个位置开始，每个位置有放左括号和右括号两种方法
- 递归搜索，终止条件为左括号和右括号等于 n 的时候
- 只有满足条件的情况下才进行递归（剪枝）

```js
var generateParenthesis = function (n) {
  let list = [];
  generate(0, 0, n, list);
  return list;
};
// left：放左括号个数，right：放右括号个数，list：存放结果，item：存放某一种结果
var generate = function (left, right, n, list, item = "") {
  // 符合题意，返回结果
  if (left === n && right === n) {
    list.push(item);
    return;
  }
  // 只有左括号小于n时才继续递归
  if (left < n) {
    generate(left + 1, right, n, list, item + "(");
  }
  // 有括号必须同时满足小于n和小于左括号个数
  if (right < left && right < n) {
    generate(left, right + 1, n, list, item + ")");
  }
};
```
