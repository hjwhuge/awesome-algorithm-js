### 题目 - 四数之和

> [leetcode 18](https://leetcode-cn.com/problems/4sum/)

给你一个由 n 个整数组成的数组  nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组  [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

- 0 <= a, b, c, d < n
- a、b、c 和 d 互不相同
- nums[a] + nums[b] + nums[c] + nums[d] == target

  你可以按 任意顺序 返回答案 。

#### 实现思路

方法一：暴力破解法

- 四层循环，然后去重

方法二：排序 + 双指针

- 三数之和基础上 + 一层遍历（注意去重问题）

### 代码实现

#### 排序 + 双指针 + 双循环

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    // 如果当前值后上一个值一致，跳过当前值，防止重复
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      // 如果当前值后上一个值一致，跳过当前值，防止重复
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        // 判断sum 和 0 大小，修改left、right指针
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          // 和上面同理，如果left或者right附近有重复项，也必须跳过，防止重复
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        }
      }
    }
  }
  return res;
};
```
