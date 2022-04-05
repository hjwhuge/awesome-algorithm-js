### 题目 - 判断括号字符串是否有效

> [leetcode 20](https://leetcode-cn.com/problems/valid-parentheses/)

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

#### 实现思路

用 map 存储左右括号对应关系，遍历输入，左括号存入栈中，右括号的话和栈顶元素比较是否相等，相等则弹出栈顶元素，否则返回 false，最终判断栈是否为空

### 代码实现

```js
var isValid = function (s) {
  const m = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  let arr = [];
  for (let i of s) {
    if (m.has(i)) {
      if (arr[arr.length - 1] === m.get(i)) {
        arr.pop();
      } else {
        return false;
      }
    } else {
      arr.push(i);
    }
  }
  return arr.length === 0 ? true : false;
};
```
