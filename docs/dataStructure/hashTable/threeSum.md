### 题目 - 三数之和

> [leetcode 15](https://leetcode-cn.com/problems/3sum/)

给你一个包含 n 个整数的数组  nums，判断  nums  中是否存在三个元素 a，b，c ，使得  a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。。

#### 实现思路

方法一：暴力破解

- 三层遍历，找到符合要求的答案，时间复杂度 o(n³)，空间复杂度为 o(1)

方法二：set

- c = -(a + b)，存 set，配合两层遍历，时间复杂度 o(n²)，空间复杂度为 o(n)

方法三：排序 + 双指针

- 遍历一次数组，然后取 left 的和 right 两个指针，通过判断三个数和的大小，和大于 0，right 左移；和小于 0，left 右移；he 等于 0，满足要求，返回结果，并同时移动 left 和 right
- 重点注意去重问题，时间复杂度 o(n²)，空间复杂度为 o(1)

### 代码实现

#### 排序加双指针实现

```js
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    // 如果单前值后上一个值一致，跳过当前值，防止重复
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      // 判断sum 和 0 大小，修改left、right指针
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        // 和上面同理，如果left或者right附近有重复项，也必须跳过，防止重复
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return res;
};
```
