### 题目 - 多数元素/求众数

> [leetcode 169](https://leetcode-cn.com/problems/majority-element/)

给定一个大小为 n 的数组  nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于  ⌊ n/2 ⌋  的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例  1:

```js
输入：nums = [3,2,3]
输出：3
```

示例 2:

```js
输入：nums = [2,2,1,1,1,2,2]
输出：2
```

#### 实现思路

方法一：排序

- 对输入数组进行排序，排序后数组的中间元素即为返回结果

方法二：哈希表

- 采用 map 来计数，再次遍历 map 获取最大值
- 可以在第一轮循环时维护一个最大值，省去第二轮遍历
- 也可以在第一轮循环时判断计数值是否大于 n/2，省去第二轮遍历

方法三：分治

### 代码实现

#### 排序实现

```js
var majorityElement = function (nums) {
  const arr = nums.sort();
  const mid = Math.floor(nums.length / 2);
  return arr[mid];
};
```

#### 哈希表实现

```js
var majorityElement = function (nums) {
  // 数组只有一个元素
  if (nums.length < 2) return nums[0];
  let map = new Map();
  const mid = Math.floor(nums.length / 2);
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (map.has(item)) {
      const len = map.get(item);
      //   满足个数条件直接返回
      if (len >= mid) {
        res = item;
        break;
      } else {
        map.set(item, len + 1);
      }
    } else {
      map.set(item, 1);
    }
  }
  return res;
};
```

#### 分治实现

```js
var majorityElement = function (nums) {};
```
