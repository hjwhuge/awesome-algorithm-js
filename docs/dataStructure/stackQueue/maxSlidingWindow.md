### 题目 - 返回滑动窗口的最大值

> [leetcode 239](https://leetcode-cn.com/problems/sliding-window-maximum/)

给你一个整数数组 nums，有一个大小为  k  的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k  个数字。滑动窗口每次只向右移动一位。

返回 滑动窗口中的最大值 。

#### 实现思路

### 代码实现

#### 双端队列实现

```js
var maxSlidingWindow = function (nums, k) {
  let res = [];
  let q = [];
  for (let i = 0; i < k; i++) {
    while (q.length && nums[i] > nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);
  }
  res.push(nums[q[0]]);
  for (let i = k; i < nums.length; i++) {
    while (q.length && nums[i] > nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);
    // 删除越界下标
    while (q[0] <= i - k) {
      q.shift();
    }
    res.push(nums[q[0]]);
  }
  return res;
};
```
