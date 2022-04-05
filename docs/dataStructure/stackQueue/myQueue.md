### 题目 - 用栈实现队列

> [leetcode 232](https://leetcode-cn.com/problems/implement-queue-using-stacks/)

请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：

#### 实现思路

用两个栈来实现，stack1 用来做输入栈，stack2 做输出栈，输入都进入 stack1，查找和删除的逻辑类似，先看 stack2 是否有，没有的话把 stack1 的值遍历到 stack2 中即可

### 代码实现

```js
var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stack2.length) {
    return this.stack2.pop();
  } else {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.stack2.length) {
    return this.stack2[this.stack2.length - 1];
  } else {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2[this.stack2.length - 1];
  }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
```
