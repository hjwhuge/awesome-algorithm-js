### 题目 - 数组中重复的数字

> [leetcode 剑指 offer 03](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)

#### 题目描述

找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0 ～ n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例:

```js
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3
```

#### 实现思路

新建一个 map 对象，遍历数组，如果数字不存在 map 中，添加到 map；如果数字存在 map 中，说明该数字是重复的，返回改数字。

### 代码实现

```js
cosnt findRepeatNumber = function(nums) {
    const m = new Map();
    for(let item of nums){
        if(m.has(item)){
            return item
        }else{
            m.set(item,1)
        }
    }
    return null
};
```
