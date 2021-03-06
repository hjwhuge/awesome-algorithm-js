### 题目 - 斐波拉契数列

#### 题目描述

斐波那契数列，这个数列从第 3 项开始，每一项都等于前两项之和；现在要求输入一个整数 n，请你输出斐波那契数列的第 n 项（从 0 开始，第 0 项为 0）
<img :src="$withBase('/斐波拉契数列.jpg')" alt="斐波拉契数列" />

#### 实现思路

这道题在剑指 offer 中实际是当作递归的反例来说的。

递归的本质是吧一个问题分解成两个或者多个小问题，如果多个小问题存在互相重叠的情况，那么就存在重复计算。

f(n) = f(n-1) + f(n-2)这种拆分使用递归是典型的存在重叠的情况，所以会造成非常多的重复计算。

另外，每一次函数调用爱内存中都需要分配空间，每个进程的栈的容量是有限的，递归层次过多，就会造成栈溢出。

递归是从最大数开始，不断拆解成小的数计算，如果不去考虑递归，我们只需要从小数开始算起，从底层不断往上累加就可以了，其实思路也很简单。

### 代码实现

#### 递归解法

时间复杂度 O(n²)

```js
function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
```

#### 递归+记忆解法

使用一个数组缓存计算过的值。
时间复杂度 O(n)

```js
function fib(n, memory = []) {
  if (n === 0 || n === 1) {
    return n;
  }
  if (!memory[n]) {
    memory[n] = fib(n - 1, memory) + fib(n - 2, memory);
  }
  return memory[n];
}
```

#### 递推解法

从下往上计算，简单动态规划的应用

```js
function Fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  let pre = 0;
  let current = 1;
  let result = 0;
  for (let i = 1; i < n; i++) {
    result = pre + current;
    pre = current;
    current = result;
  }
  return result;
}
```
