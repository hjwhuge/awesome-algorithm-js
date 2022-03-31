### 题目 - 求链表的中间结点

> [leetcode 876](https://leetcode-cn.com/problems/middle-of-the-linked-list/)

给定一个头结点为 head 的非空单链表，返回链表的中间结点。

如果有两个中间结点，则返回第二个中间结点。

#### 实现思路

- 思路一：遍历链表，把链表结点存入数组中，最后查询数组中间结点即为链表中间结点
- 思路二：遍历链表，计算出链表总长度 N，再次遍历链表，到达中间结点时返回
- 思路三：快慢指针，慢指针每次走一步，快指针每次走两步，当快指针走到终点，慢指针即为中间结点

### 代码实现

#### 借用数组

```js
var middleNode = function (head) {
  let arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }
  const index = Math.floor(arr.length / 2);
  return arr[index];
};
```

#### 先遍历出链表总长度，第二次遍历取得结果

```js
var middleNode = function (head) {
  // n 用于记录链表总长度
  let n = 0;
  // m 第二次循环是否到了链表一半
  let m = 0;
  let cur = head;
  while (cur) {
    cur = cur.next;
    n++;
  }
  n = Math.floor(n / 2);
  // 重置cur
  cur = head;
  while (cur) {
    // 满足条件，返回节点
    if (m === n) {
      return cur;
    }
    cur = cur.next;
    m++;
  }
  return null;
};
```

#### 快慢指针

```js
var middleNode = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
```
