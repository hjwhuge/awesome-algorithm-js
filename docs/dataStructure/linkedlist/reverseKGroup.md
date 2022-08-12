### 题目 - K 个一组翻转链表

> [leetcode 25](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)

题目描述

给你链表的头节点 head ，每  k  个节点一组进行翻转，请你返回修改后的链表。

示例：

```js
输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]

输入：head = [1,2,3,4,5], k = 3
输出：[3,2,1,4,5]
```

### 代码实现

```js
const myReverse = (head, tail) => {
  let prev = null;
  let curr = head;
  while (prev !== tail) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return [tail, head];
};
var reverseKGroup = function (head, k) {
  const hair = new ListNode(0);
  hair.next = head;
  let pre = hair;
  while (head) {
    let tail = pre;
    // 查看剩余部分长度是否大于等于 k
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) {
        return hair.next;
      }
    }
    const temp = tail.next;
    [head, tail] = myReverse(head, tail);
    // 把子链表重新接回原链表
    pre.next = head;
    tail.next = temp;
    pre = tail;
    head = tail.next;
  }
  return hair.next;
};
```
