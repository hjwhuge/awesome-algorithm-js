### 题目 - 检测链表中是否有环

> [leetcode 141](https://leetcode-cn.com/problems/linked-list-cycle/)

给你一个链表的头结点 head ，判断链表中是否有环。

#### 实现思路

- 思路一：利用 set 数据结构，遍历链表，如果不存在于 set 中，继续遍历并把当前结点存入 set
- 思路二：快慢指针，快指针走两步，慢指针走一步，循环结束条件-快慢指针都走完，判断快慢指针是否相遇

### 代码实现

#### set 判重

```js
var hasCycle = function (head) {
  let s = new Set();
  while (head) {
    if (s.has(head)) {
      return true;
    } else {
      s.add(head);
      head = head.next;
    }
  }
  return false;
};
```

#### 快慢指针

```js
var hasCycle = function (head) {
  let fast = head;
  let slow = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
```
