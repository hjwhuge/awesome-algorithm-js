### 题目 - 2 的幂

> [leetcode 231](https://leetcode-cn.com/problems/power-of-two/)

#### 题目描述

给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。
如果存在一个整数 x 使得  n == 2x ，则认为 n 是 2 的幂次方。

示例：

```js
输入：n = 16
输出：true
解释：24 = 16
```

### 代码实现

#### 位运算实现

- 2 的幂满足，该数只存在一个二进制 1
- 消除掉一个二进制 1 之后，该数为 0 说明是 2 的幂，否则不是

```js
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  return n & (n - 1) ? false : true;
};
```
