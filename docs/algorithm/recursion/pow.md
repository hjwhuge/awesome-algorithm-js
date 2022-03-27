### 题目 - 实现 pow 函数

> [leetcode 50](https://leetcode-cn.com/problems/powx-n/)

计算 x 的 n 次方。换句话说就是，x 乘以自身 n 次

#### 实现思路

在 n 大于 0 的时候，利用分治的思想，把计算一直往下拆分，直到 n 为 0 的时候，返回 1，n 为 1 的时候，返回 x;

其余情况下，n 偶数时，结果为 x² 的二分之 n 次方；n 奇数时，结果为 x\* x 的二分之 n-1 次方。

### 代码实现

```js
function myPow(x, n) {
  if (n == 0) {
    return 1;
  }
  if (n == 1) {
    return x;
  }
  // n为负数时，计算倒数
  if (n < 0) {
    return 1 / myPow(x, -n);
  }
  // 奇数
  if (n % 2) {
    return x * myPow(x, n - 1);
  } else {
    return myPow(x * x, n / 2);
  }
}
```
