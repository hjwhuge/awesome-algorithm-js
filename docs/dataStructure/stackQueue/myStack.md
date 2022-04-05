### 题目 - 用队列实现栈

> [leetcode 225](https://leetcode-cn.com/problems/implement-stack-using-queues/)

请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）

#### 实现思路

使用两个队列来实现，其中 queue 1 用于存储栈内的元素，queue 2 作为入栈操作的辅助队列，q2 作用每次有 push 操作，把 q1 的顺序进行调整，保证 q1 的前端和后端分别对应栈顶和栈底

### 代码实现

```js
var MyStack = function () {
  this.queue1 = [];
  this.queue2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue2.push(x);
  for (let item of this.queue1) {
    this.queue2.push(item);
  }
  this.queue1 = this.queue2;
  this.queue2 = [];
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.queue1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue1.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
```
