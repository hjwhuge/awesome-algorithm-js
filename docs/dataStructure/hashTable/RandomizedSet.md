### 题目 - 常数时间插入、删除和获取随机元素

> [leetcode 380](https://leetcode-cn.com/problems/insert-delete-getrandom-o1/)

实现 RandomizedSet 类：

- RandomizedSet() 初始化 RandomizedSet 对象
- bool insert(int val) 当元素 val 不存在时，向集合中插入该项，并返回 true ；否则，返回 false 。
- bool remove(int val) 当元素 val 存在时，从集合中移除该项，并返回 true ；否则，返回 false 。
- int getRandom() 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。每个元素应该有 相同的概率 被返回。

你必须实现类的所有函数，并满足每个函数的 平均 时间复杂度为 O(1) 。

示例 ：

```js
输入
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
输出
[null, true, false, true, 2, true, false, 2]

解释
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
randomizedSet.remove(2); // 返回 false ，表示集合中不存在 2 。
randomizedSet.insert(2); // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
randomizedSet.getRandom(); // getRandom 应随机返回 1 或 2 。
randomizedSet.remove(1); // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
randomizedSet.insert(2); // 2 已在集合中，所以返回 false 。
randomizedSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2
```

#### 实现思路

通过 array 和 map 实现

- 通过 array 来实现查找函数 O(1)，通过 map 来实现删除和插入函数 O(1)

### 代码实现

```js
var RandomizedSet = function () {
  this.nums = [];
  this.m = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.m.has(val)) {
    return false;
  } else {
    const idx = this.nums.length;
    this.m.set(val, idx);
    this.nums.push(val);
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.m.has(val)) {
    const idx = this.nums.findIndex((item) => item === val);
    this.nums.splice(idx, 1);
    this.m.delete(val);
    return true;
  } else {
    return false;
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  // 通过 Math的random来获取随机下标
  const random = Math.floor(Math.random() * this.nums.length);
  return this.nums[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
```
