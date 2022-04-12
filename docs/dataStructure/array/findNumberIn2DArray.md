### 题目 - 二维数组中的查找

> [leetcode 剑指 offer 04](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

#### 题目描述

在一个 n \* m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

示例:

现有矩阵 matrix 如下：

```js
[
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
```

给定 target = 5，返回  true。

给定  target = 20，返回  false。

#### 实现思路

方法一：暴力破解

- 双重 for 循环

方法二：线性查找

- 从二维数组的右上角为起点和输入整数判断，如果输入整数大于顶点，排除该行；如果输入整数小于顶点，排除该列；如果等于，返回结果；一直判断到只剩下一个值

### 代码实现

#### 线性查找实现

```js
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix || matrix.length == 0 || matrix[0].length == 0) {
    return false;
  }
  const rows = matrix.length;
  const columns = matrix[0].length;
  let row = 0;
  let column = columns - 1;
  let res = false;
  while (row < rows && column >= 0 && !res) {
    let num = matrix[row][column];
    if (target > num) {
      row++;
    } else if (target < num) {
      column--;
    } else {
      res = true;
    }
  }
  return res;
};
```
