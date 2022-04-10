### 题目 - 有效的字母异位词

> [leetcode 242](https://leetcode-cn.com/problems/valid-anagram/)

给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若  s 和 t  中每个字符出现的次数都相同，则称  s 和 t  互为字母异位词。

示例  1:

```js
输入: (s = "anagram"), (t = "nagaram");
输出: true;
```

示例 2:

```js
输入: (s = "rat"), (t = "car");
输出: false;
```

#### 实现思路

方法一：排序

- 字符串转数组
- 数组排序
- 数组为字符串比较是否相等

方法二：哈希表

- 采用 map 来计数
- 循环 s 计数 + 1，循环 t 计数 - 1，最后判断 map 是否为空

### 代码实现

#### 排序实现

```js
var isAnagram = function (s, t) {
  return s.split("").sort().join("") == t.split("").sort().join("");
};
```

#### 哈希表实现

```js
var isAnagram = function (s, t) {
  let m = new Map();
  for (let item of s) {
    if (m.has(item)) {
      m.set(item, m.get(item) + 1);
    } else {
      m.set(item, 1);
    }
  }
  for (let item of t) {
    if (m.has(item)) {
      let idx = m.get(item);
      idx === 1 ? m.delete(item) : m.set(item, idx - 1);
    } else {
      return false;
    }
  }
  return m.size === 0;
};
```
