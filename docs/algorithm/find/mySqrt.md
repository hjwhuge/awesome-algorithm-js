### 题目 - x 的平方根

> [leetcode 69](https://leetcode-cn.com/problems/sqrtx/)

#### 题目描述

给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

示例：

```js
输入：x = 4
输出：2
```

### 代码实现

#### 二分查找实现

- 2² = 4；3² = 9；4² = 16
- 3~8 平方根整数部分为 2, 10~15 整数部分为 3
- 可以得出规律，最终 mid² 必定是小于或者等于 x²

```js
var mySqrt = function (x) {
  if (x < 2) return x;
  let low = 1;
  let high = x;
  let res = -1;
  while (high >= low) {
    // 求中间元素
    let mid = Math.floor((high + low) / 2);
    if (mid * mid <= x) {
      res = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return res;
};
```

#### 牛顿迭代法
