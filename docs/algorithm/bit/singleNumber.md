### 题目 - 只出现一次的数字

> [leetcode 136](https://leetcode-cn.com/problems/single-number/)

#### 题目描述

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

示例：

```js
输入: [4, 1, 2, 1, 2];
输出: 4;
```

### 代码实现

- 使用异或运算符实现，数组内的值两两异或，最后结果就是只出现一次的元素
  - 异或：相同为 0，不同为 1

```js
var singleNumber = function (nums) {
  return nums.reduce((a, b) => a ^ b);
};
```
