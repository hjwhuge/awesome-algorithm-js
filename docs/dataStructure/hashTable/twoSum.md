### 题目 - 两数之和

> [leetcode 1](https://leetcode-cn.com/problems/two-sum/)

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。

#### 实现思路

方法一：暴力破解

- 两层遍历，找到符合要求的答案，时间复杂度 o(n²)，空间复杂度为 o(1)

方法二：哈希表

- 通过一个哈希表，简化查询 target numsp[i]的查询，时间复杂度 o(n)，空间复杂度为 o(n)

### 代码实现

#### 哈希表实现

```js
var twoSum = function (nums, target) {
  let map = new Map();
  for (var i = 0; i < nums.length; i++) {
    let res = target - nums[i];
    if (map.has(res)) {
      return [map.get(res), i];
    }
    map.set(nums[i], i);
  }
};
```
