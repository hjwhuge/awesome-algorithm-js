### 题目 - 第一个只出现一次的字符

> [leetcode 剑指 offer50](https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/)

在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例 1：

```js
输入：s = "abaccdeff"
输出：'b'
```

示例 2：

```js
输入：s = ""
输出：' '
```

#### 实现思路

方法一：双层遍历

- 通过第二层遍历判断是否有重复，如果没有，直接返回当前值；如果有，第一层遍历继续。
- 时间复杂度 O(n²) 空间复杂度 O(1)

方法二：两次循环 + 哈希表

- 第一次循环手机字符串出现频次，第二次循环判断第一个频次为 1 的返回即可
- 时间复杂度 O(n) 空间复杂度 O(n)

### 代码实现

#### 两次循环 + 哈希表实现

```js
var firstUniqChar = function (s) {
  let m = new Map();
  let res = " ";
  for (let item of s) {
    if (m.has(item)) {
      m.set(item, m.get(item) + 1);
    } else {
      m.set(item, 1);
    }
  }
  for (let item of s) {
    if (m.get(item) === 1) {
      res = item;
      break;
    }
  }
  return res;
};
```
