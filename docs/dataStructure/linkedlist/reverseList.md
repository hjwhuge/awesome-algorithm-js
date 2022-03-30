## 题目

> 反转链表

输入一个链表，反转链表后，输出新链表的表头。

## 思路

反转链表，把节点的后继指针指向当前的节点的前继节点

## 代码

```js
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};
```
