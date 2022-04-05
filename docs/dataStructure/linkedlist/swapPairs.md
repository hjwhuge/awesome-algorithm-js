### 题目 - 链表交换相邻元素

> [leetcode 24](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)

给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

#### 实现思路

创建哑结点 dummy，创建 temp 指向当前节点（初始为哑结点），循环 temp 节点，如果 temp 后面有两个节点才进行遍历

获得 temp 后面的两个节点 node1 和 node2

遍历中需要进行的操作是：把 temp -> node1 -> node2 转换成 temp -> node2 -> node1；然后把 temp 设为 node1.

### 代码实现

```js
var swapPairs = function (head) {
  const dummy = new ListNode(0, head);
  let temp = dummy;
  while (temp.next && temp.next.next) {
    const node1 = temp.next;
    const node2 = temp.next.next;
    // 关键代码
    temp.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    temp = node1;
  }
  return dummy.next;
};
```
