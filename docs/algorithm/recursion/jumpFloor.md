### 题目 - 跳台阶

> [leetcode 剑指 offer 10](https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/)

#### 题目描述

一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法？

#### 实现思路

这里其实就是斐波那契数列，第一阶有 1 种走法，第二阶有 2 种走法，第三阶有 3 种走法，第四阶有 5 种走法，第五阶有 8 种走法，这个走法的规律正好符合斐波那契数列 1(这个 1 在此例子省略了)、1、2、3、5、8、13、21....不管哪个数都是前两个数的和，那么第 n 个数就等于第 n-1 位置的数加上第 n-2 位置的数也就是 F(n) = F(n-1) + F(n-2)。

### 代码实现

#### 递归版本

```js
function jumpFloor(n) {
  if (n === 1 || n === 2) {
    return n;
  }
  return jumpFloor(n - 1) + jumpFloor(n - 2);
}
```

#### 循环解法

从下往上计算

```js
function Fibonacci(n) {
  if (n <= 1) {
    return 1;
  }
  let i = 1;
  let pre = 1;
  let current = 1;
  let result = 0;
  while (i++ < n) {
    result = pre + current;
    // leetcode 解题需要对result取模
    // result = (pre + current) % 1000000007;
    pre = current;
    current = result;
  }
  return result;
}
```
