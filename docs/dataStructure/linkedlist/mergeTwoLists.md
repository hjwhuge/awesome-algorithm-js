### 题目 - 两个有序的链表合并

> [leetcode 21](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

#### 实现思路

- 思路一：while 循环遍历，终止条件两个都不是空链表，判断链表头结点大小，小的放入结果中，并把该链表头结点后移一位。
- 思路二：递归实现

### 代码实现

#### 循环实现

```js
var mergeTwoLists = function (list1, list2) {
  // 设置哨兵节点，方便返回最终结果
  const prehead = new ListNode();
  // 维护prev指针，每次加入一个数据后，更新prev指针
  let prev = prehead;
  while (list1 != null && list2 != null) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      list2 = list2.next;
    }
    prev = prev.next;
  }
  // 循环结束，会存在还有一个链表不会空，把它拼接到prev指针后面
  prev.next = list1 === null ? list2 : list1;
  return prehead.next;
};
```

#### 递归实现

```js

```
