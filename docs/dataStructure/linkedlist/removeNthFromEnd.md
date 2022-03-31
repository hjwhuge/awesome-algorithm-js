### 题目 - 删除链表倒数第 n 个结点

> [leetcode 19](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

#### 实现思路

- 思路一：遍历链表，计算出链表总长度 k，再次遍历链表，到达倒数第 n 个节点返回
  - 倒数第 n 个即为正数第 k - n + 1 个
- 思路二：只遍历一次，采用两个指针，第一个指针先走 n 步，然后和第二个指针一起，一次走一步，当第一个指针走到最后时，第二个指针位置即为倒数第 n 个
  - 当一个指针处理链表过于麻烦，可以考虑采用多个指针来实现
- 思路三：借用栈，我们也可以在遍历链表的同时将所有节点依次入栈。根据栈「先进后出」的原则，我们弹出栈的第 n 个节点就是需要删除的节点，并且目前栈顶的节点就是待删除节点的前驱节点。

### 代码实现

#### 双指针

哑结点的使用很重要

```js
var removeNthFromEnd = function (head, n) {
  // 记得使用哑结点来简化操作，否则会有很多边界情况需要判断
  const dummy = new ListNode(0, head);
  let first = head;
  let second = dummy;
  for (let i = 0; i < n; i++) {
    first = first.next;
  }
  while (first) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
};
```
